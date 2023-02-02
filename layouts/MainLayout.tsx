import React from 'react';
import Card from "@/components/Card";
import styles from "../styles/Main.module.scss"
import Banner from "@/components/Banner";
import mainStore from "@/stores/mainStore";
import {inject, observer} from "mobx-react";
import InjectNames from "@/stores/configuration/storeIdentifier";

interface MainLayoutProps {
    mainStore?: mainStore
}

const MainLayout = ({mainStore}: MainLayoutProps) => {
    return (
        <div className={styles.main}>
            <Banner/>
            {mainStore?.products.map((product) => {
                return <Card key={product.id} product={product}/>
            })}
        </div>
    );
};

export default inject(InjectNames.MainStore)(observer(MainLayout))