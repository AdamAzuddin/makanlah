"use client";
import styles from "./page.module.css"

function Order(props) {
    return (
        <div className={styles.order}>
            <header className={styles.header}>
                <h1>You received an order from {props.name}</h1>
            </header>
            <div className={styles.body}>
                <h3>
                    Delivery earnings:<br/><input readOnly type="text">{props.earnings}</input>
                </h3>
                <p>Total tips:<br/><input readOnly type="text">{props.tips}</input></p>
                <p>Total distance:<br/><input readOnly type="text">{props.distance}</input></p>
                <button>Accept order</button>
                <p className={styles.details}>Order details:</p>
            </div>
        </div>
    );
}

export default Order