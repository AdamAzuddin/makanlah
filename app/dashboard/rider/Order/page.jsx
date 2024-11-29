"use client";
import styles from "./page.module.css"

function Order(props) {
    return (
        <div className={styles.order}>
            <header className={styles.header}>
                <h1>You received an order from {props.name}</h1>
            </header>
            <div className={styles.body}>
                <div>
                    <h3>
                        <strong>Delivery earnings:</strong><br/>
                        <input readOnly type="text" placeholder={`RM ${props.earnings}`}/>
                    </h3>
                    <p>
                        Total tips:<br/>
                        <input readOnly type="text" placeholder={`RM ${props.tips}`}/>
                    </p>
                    <p>
                        Total distance:<br/>
                        <input readOnly type="text" placeholder={`RM ${props.distance}`}/>
                    </p>
                </div>
                <div className={styles.bodyRight}>
                    <p>Order details:</p>
                    <div className={styles.orderDetails}>
                        <img className={styles.food} src="/makanan.jpg" alt="order"/>
                        <div style={{display: "block", marginLeft: 20, lineHeight: 1.2}}>
                            <p>Taco bell 10x</p>
                            <p>Notes to driver: </p>
                            <input readOnly type="text" placeholder={props.notes}/>
                        </div>
                    </div>
                    <button>Accept order</button>
                </div>
            </div>
        </div>
    );
}

export default Order