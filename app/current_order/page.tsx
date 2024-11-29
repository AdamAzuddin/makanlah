"use client";
import React, { useState, useEffect } from "react";
import { useOrder } from "../context/order";

const Page = () => {
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(true);
  const { order } = useOrder();
  useEffect(() => {
    // Check if the last element's name is "Confirmed" and set isOrderConfirmed to true
    if (order.length > 0 && order[order.length - 1].name === "Confirmed") {
      setIsOrderConfirmed(true);
    }
  }, [order]);
  console.log(order);
  return (
    <div>
      <h1 className="heading">
        <b>Current Order</b>
      </h1>
      <p className="paragraph">today</p>
      {isOrderConfirmed ? (
        <ul className="order-details">
          {order.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt="delicious noodles" className="img" />
              <div className="susun">
                <div className="details">
                  <h2>{item.name}</h2>
                  <b>
                    {item.quantity} x RM {item.price.toFixed(2)}
                  </b>
                </div>
                <div className="date">
                  <h4>28 Nov 2024</h4>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
      <style jsx>{`
        .heading {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 10px;
          margin-top: 30px;
          padding-left: 30px;
        }
        .paragraph {
          padding-left: 30px;
          font-size: 1.5rem;
          font-weight: light;
          opacity: 0.8;
        }
        .img {
          width: 100px;
          height: 100px;
          border-radius: 20%;
          border: 1px solid #000;
          margin-right: 15px;
        }
        .order-details {
          list-style-type: none;
          padding: 0;
        }
        .order-details li {
          display: flex;
          align-items: flex-start;
          margin-bottom: 5px;
        }
        .susun {
          padding-top: 20px;
          display: flex;
          flex-direction: column;
        }
        .details {
          display: flex;
          align-items: center;
        }
        .details h2 {
          margin-right: 10px;
        }
        .date {
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
};

export default Page;
