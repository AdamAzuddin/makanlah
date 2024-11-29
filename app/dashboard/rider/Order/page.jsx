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
                    <h1>
                        <strong>Location:</strong><br/>
                        <input readOnly type="text" placeholder={`${props.location}`}/>
                    </h1>
                    <h3>
                        Delivery earnings:<br/>
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
                            <textarea readOnly type="text" placeholder={props.notes}/>
                        </div>
                    </div>
                    <br/>
                    <button className={styles.acceptButton}>Accept order</button> 
                </div>
            </div>
        </div>
    );
}

export default Order