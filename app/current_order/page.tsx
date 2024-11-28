"use client";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="heading">
        <b>Current Order</b>
      </h1>
      <p className="paragraph">today</p>
      <ul className="order-details">
        <li>
          <img src="noodles.png" alt="delicious noodles" className="img" />
          <div className="susun">
            <div className="details">
              <h2>Eightys Burger - Taman Putra Permai</h2>
              <h2>
                <b>RM12.00</b>
              </h2>
            </div>
            <div className="date">
              <h4>28 Nov 2024</h4>
            </div>
          </div>
        </li>
        <li>
          <img src="noodles.png" alt="delicious noodles" className="img" />
          <div className="susun">
            <div className="details">
              <h2>Eightys Burger - Taman Putra Permai</h2>
              <h2>
                <b>RM12.00</b>
              </h2>
            </div>
            <div className="date">
              <h4>28 Nov 2024</h4>
            </div>
          </div>
        </li>
        <li>
          <img src="noodles.png" alt="delicious noodles" className="img" />
          <div className="susun">
            <div className="details">
              <h2>Eightys Burger - Taman Putra Permai</h2>
              <h2>
                <b>RM12.00</b>
              </h2>
            </div>
            <div className="date">
              <h4>28 Nov 2024</h4>
            </div>
          </div>
        </li>
      </ul>
      <style jsx>{`
        .heading {
          font-size: 2.5rem; /* Adjust the size as needed */
          font-weight: bold;
          margin-bottom: 10px;
          margin-top: 30px;
          padding-left: 30px;
        }
        .paragraph {
          padding-left: 30px;
          font-size: 1.5rem;
          weight: light;
          opacity: 0.8;
        }
        .img {
          width: 30%;
          height: 30%;
          border-radius: 20px;
          
        }
        .order-details {
          list-style-type: none;
          padding: 0;
          display: flex;
          align-items: center;
        }
        .order-details li {
          padding: 30px;
          display: flex;
          align-items: center;
          border: 1px solid #ccc;
          border-radius: 10px;
          flex-direction: column;
        }
        .order-details h2 {
          margin-left: 10px;
        }
        .date {
          margin-left: 10px;
          display: flex;
          flex-direction: column;
          opacity: 0.8;
        }
        .details {
          display: flex;
          flex-direction: row;
        }
        .susun {
          display: flex;
          flex-direction: column;
        }
        .details b {
          color: #f17228;
          font-size: 1.5rem;
          margin-left: 10px;
        }
        .details h2 {
          font-size: 1.5rem;
        }
      `}</style>
      ;
    </div>
  );
};

export default page;
