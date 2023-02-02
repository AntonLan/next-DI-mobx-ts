import React from 'react';
import styles from "../styles/Card.module.scss"
import {CardType} from "@/types/CardType";
import Image from 'next/image'
import AddToCart from "@/components/AddToCart";
import {inject, observer} from "mobx-react";
import InjectNames from "@/stores/configuration/storeIdentifier";
import MainStore from "@/stores/mainStore";
import HitLabel from "@/components/HitLabel";
import Favorite from "../assets/Favorite.svg"
import FavoriteRed from "../assets/FavoriteRed.svg"

interface CardProps {
    mainStore?: MainStore
    product: CardType
}

const Card = ({mainStore, product}: CardProps) => {
    return (
        <div className={styles.card}>
            {product.rating.count > 300 && <HitLabel title="Хит"/>}
            <Image
                src={product.image}
                alt={product.title}
                width={220}
                height={220}
            />
            <div>
                <div className={styles.cardCategories}>{product.category}</div>
                <div className={styles.cardTitle}>{product.title}</div>
                <div className={styles.cardPrice}>{mainStore?.getPrice(product?.price!)} ₽ <span>/шт.</span></div>
            </div>
            {
                product.isAddToCart
                ?
                    <div className={styles.cartContainer}>
                        <button
                            onClick={() => mainStore?.removeFromCart(product)}
                            className={styles.buttonCart}>В корзине</button>
                        <Image src={FavoriteRed} alt="favorite"/>
                    </div>

                :
                    <div className={styles.cartContainer}>
                        <AddToCart product={product}/>
                        <Image src={Favorite} alt="favorite"/>
                    </div>

            }


        </div>
    );
};

export default inject(InjectNames.MainStore)(observer(Card));