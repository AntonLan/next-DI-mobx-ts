import React from 'react';
import styles from '../styles/Banner.module.scss'

interface SalesLabelProps {
    title: string
}

const Label = ({title}: SalesLabelProps) => {
    return (
        <div className={styles.labelContainer}>
            <div className={styles.labelLeft}/>
            <div className={styles.titleLabel}>{title}</div>
            <div className={styles.labelRight}/>
        </div>
    );
};

export default Label;