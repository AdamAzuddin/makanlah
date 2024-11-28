"use client";
import React from "react";
import styles from "./page.module.css";
import Card from "../components/Card";
import RiderPicture from "../assets/rider.png";

function Dashboard(props) {
    return (
        <div className={styles.dashboard}>
            <header className={styles.header}>
                <h1>Hello, {props.name}</h1>
                <img className={styles.riderPicture} src={RiderPicture}/>
                <p></p>
            </header>

            <main className={styles.content}>
                <div className={styles.grid}>
                    <Card title="YOUR EARNINGS" content={props.earnings}/>
                    <Card title="STATUS" content={props.status ? "Online" : "Offline"}/>
                    <Card title="INCOMING ORDERS" content={props.orders}/>

                </div>
            </main>
        </div>
    );
};

export default Dashboard;
