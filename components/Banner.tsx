import React from 'react';
import arrow from '../assets/arrow.svg'
import bannerTop from '../assets/banner top.svg'
import bannerBottom from '../assets/banner bottom.svg'
import style from '../styles/Banner.module.scss'
import Image from 'next/image'
import SalesLabel from "@/components/SalesLabel";

const Banner = () => {
    return (
        <div className={style.banner}>
            <h1>Всё для комфортной работы</h1>
            <Image src={arrow} alt=""/>
            <div className={style.bannerTop}>
                <Image src={bannerTop} alt=""/>
                <div className={style.bannerTopContent}>
                    <SalesLabel title="-25"/>
                    <p>на товары для кабинета</p>
                    <div className={style.select}>
                        <p>Выбрать</p>
                        <div/>
                    </div>
                </div>
            </div>
            <div className={style.bannerBottom}>
                <div className={style.bannerBottomContent}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <p>Скидка</p>
                        <SalesLabel title="10"/>
                    </div>
                    <p>на периферию для компьютера</p>
                    <div className={style.select}>
                        <p>Выбрать</p>
                        <div/>
                    </div>
                </div>
                <Image src={bannerBottom} alt=""/>
            </div>
        </div>
    );
};

export default Banner;