"use client";
import React from "react";
import styles from "./page.module.css";
import Card from "../components/Card";

function Dashboard(props) {
    return (
        <div className={styles.dashboard}>
            <header className={styles.header}>
                <h1>Hello, Akram</h1>
                <img className={styles.riderPicture} src="/rider.png" alt="rider "/>
            </header>

            <main className={styles.content}>
                <div className={styles.grid}>
                    <Card
                        title="YOUR EARNINGS"
                        description={
                            <>
                                Today: {props.earningsD}<br/>
                                This month: {props.earningsM}<br/>
                                Total: {props.earningsT}<br/>
                            </>
                        }
                        image="/earnings.png"
                    />
                    <Card
                        title="STATUS"
                        description={
                            <span className={props.status ? styles.statusOn : styles.statusOff }>
                                {props.status ? "Online" : "Offline"}
                            </span>
                        }
                        image="/signal-status.png"
                    />
                    <Card
                        title="INCOMING ORDERS"
                        description={
                            <>
                                These are your incoming orders
                            </>
                        }
                        image="/shopping-list.png"
                    />
                    <Card
                        title="RECENT TRANSACTIONS"
                        description={
                            <>
                                These are your recent transactions
                                <button>Hello</button>
                            </>
                        }
                        image="/transaction.png"
                    />
                </div>
            </main>
        </div>
    );
};

Dashboard.defaultProps = {
    name: "Nabil",
    earningsD: 50,
    earningsM: 300,
    earningsT: 999,
}

export default Dashboard;
