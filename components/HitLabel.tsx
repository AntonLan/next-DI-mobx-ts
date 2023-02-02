import React from 'react';
import styles from "@/styles/Card.module.scss";

interface HitLabelProps {
    title: string
}

const HitLabel = ({title}: HitLabelProps) => {
    return (
        <div className={styles.labelContainer}>
            <div className={styles.labelLeft}/>
            <div className={styles.titleLabel}>{title}</div>
            <div className={styles.labelRight}/>
        </div>
    );
};

export default HitLabel;