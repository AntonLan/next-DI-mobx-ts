import React from 'react';
import styles from "@/styles/Card.module.scss";
import MainStore from "@/stores/mainStore";
import {inject, observer} from "mobx-react";
import InjectNames from "@/stores/configuration/storeIdentifier";
import {CardType} from "@/types/CardType";

interface AddToCartProps {
    mainStore?: MainStore
    product: CardType
}

const AddToCart = ({mainStore, product}: AddToCartProps) => {
    return (
        <div className={styles.buttonContainer}>
            <button onClick={() => mainStore?.addToCart(product)}>В корзину</button>
            <div className={styles.countProduct}>
                <button className={styles.btnDecrement}
                        onClick={() => mainStore?.decrement(product)}>-</button>
                <p>{product.count}</p>
                <button
                    className={styles.btnIncrement}
                    onClick={() => mainStore?.increment(product)}>+</button>
            </div>
        </div>
    );
};

export default inject(InjectNames.MainStore)(observer(AddToCart));