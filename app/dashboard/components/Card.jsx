"use client";
import React from "react";
import styles from "./Card.module.css";

function Card({ title, description, image, children }) {
    return (
        <div className={styles.card}>
            {image && <img src={image} alt={title} className={styles.cardImage} />}
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDescription}>{description}</p>
                {children && <div className={styles.cardChildren}>{children}</div>}
            </div>
        </div>
    );
};

export default Card;
