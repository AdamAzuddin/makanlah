"use client";
import React, { useState } from "react";
const Customer = () => <div>Customer Component</div>;
const Driver = () => <div>Driver Component</div>;
const Merchant = () => <div>Merchant Component</div>;

const pageCust = () => {
  const [selectedComponent, setSelectedComponent] =
    useState<string>("Customer");

  const renderComponent = () => {
    switch (selectedComponent) {
      case "Customer":
        return <Customer />;
      case "Driver":
        return <Driver />;
      case "Merchant":
        return <Merchant />;
      default:
        return null;
    }
  };
  return (
    <div style={styles.container}>
      {/* Page Header */}
      <h1 style={styles.heading}>Sign Up</h1>

      {/* Login Card */}
      <div style={styles.back}>
        <div style={styles.card}>
          <div style={styles.inputGroup}>
            <label htmlFor="userType" style={styles.label}>
              Sign up as :
            </label>
            <select
              id="userType"
              style={styles.input}
              value={selectedComponent}
              onChange={(e) => setSelectedComponent(e.target.value)}
            >
              <option value="Customer">Customer</option>
              <option value="Driver">Driver</option>
              <option value="Merchant">Merchant</option>
            </select>
          </div>
          {/* Name Input */}
          <div style={styles.inputGroup}>
            <label htmlFor="name" style={styles.label}></label>
            <input
              type="name"
              id="name"
              placeholder="name"
              style={styles.input}
            />
          </div>
          {/* Email Input */}
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}></label>
            <input
              type="email"
              id="email"
              placeholder="email"
              style={styles.input}
            />
          </div>

          {/* Password Input */}
          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}></label>
            <input
              type="password"
              id="password"
              placeholder="password"
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="confirm password" style={styles.label}></label>
            <input
              type="confirm password"
              id="confirm password"
              placeholder="confirm password"
              style={styles.input}
            />
          </div>

          {/* Login Button */}
          <button style={styles.button}>Login</button>
        </div>
      </div>
    </div>
  );
};
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#FFF",
    padding: "20px",
    textAlign: "center",
  },
  heading: {
    fontSize: "3.5rem",
    gap: "10px",
    fontWeight: "bold",
    color: "black",
    marginBottom: "20px",
  },
  card: {
    backgroundColor: "#FFB800",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
    width: "300px",
  },
  back: {
    backgroundColor: "#FFC700",
    padding: "50px",
    borderRadius: "20px",
  },
  inputGroup: {
    marginBottom: "20px",
  },
  label: {
    fontSize: "1rem",
    color: "#000",
    marginBottom: "8px",
    display: "block",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    backgroundColor: "#f9f9f9",
  },
  button: {
    width: "100%",
    padding: "15px",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#FFF",
    backgroundColor: "#FF5722",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default pageCust;
