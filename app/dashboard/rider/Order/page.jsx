"use client";
import styles from "./page.module.css"

function Order(props) {
    return (
        <div className={styles.order}>
            <h1>You got an order from Nabil Irfan</h1>
            <h3>Delivery earnings: {props.earnings}</h3>
            <p>Total tips: {props.tips}</p>
        </div>
    );
}

export default Order