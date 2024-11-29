"use client";
import React, { useState } from "react";
import { useOrder } from "../context/order";

export default function CheckoutPage() {
  const { order } = useOrder();
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  // Calculate the total price of the order
  const calculateTotal = () => {
    return order
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };
  const handleConfirmOrder = () => {
    alert("Order successfully placed!");

    setIsOrderConfirmed(true);
  };

  return (
    <main style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Basket</h2>
      {order.length === 0 ? (
        <p style={{ textAlign: "center" }}>Your basket is empty!</p>
      ) : (
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "16px",
            maxWidth: "400px",
            margin: "0 auto",
          }}
        >
          <h3 style={{ marginBottom: "16px" }}>
            {order[0]?.restaurantName || "Your Order"}
          </h3>
          <ul style={{ listStyle: "none", padding: 0, marginBottom: "20px" }}>
            {order.map((item) => (
              <li
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <div>
                  <strong>{item.name}</strong>
                  {/* Check if options exist before trying to map */}
                  {item.options && item.options.length > 0 && (
                    <div style={{ fontSize: "12px", color: "#555" }}>
                      {item.options.map((option, index) => (
                        <div key={index}>{option}</div>
                      ))}
                    </div>
                  )}
                </div>
                <div>
                  {item.quantity} x RM {item.price.toFixed(2)}
                </div>
              </li>
            ))}
          </ul>
          <div style={{ borderTop: "1px solid #ddd", paddingTop: "10px" }}>
            <p style={{ marginBottom: "10px" }}>
              <strong>Subtotal</strong>: RM {calculateTotal()}
            </p>
            <p style={{ fontSize: "12px", color: "#555" }}>
              Delivery Fee will be shown after you review the order
            </p>
          </div>
          <div
            style={{
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            {!isOrderConfirmed && (
              <button
                onClick={handleConfirmOrder}
                style={{
                  backgroundColor: "#FF6600",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  padding: "10px 20px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                Confirm Order
              </button>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
