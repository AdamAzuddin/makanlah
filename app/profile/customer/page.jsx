"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

function CustomerProfile() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "Bob",
    email: "bob@gmail.com",
    password: "password123",
    address: "No 5, Jalan Bob, Selangor",
    balance: 600,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Customer profile updated:', formData);
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <h2>Update Customer Profile</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="balance">Balance (RM)</label>
          <input
            type="number"
            id="balance"
            name="balance"
            value={formData.balance}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>Update Profile</button>
      </form>
    </div>
  );
}

export default CustomerProfile;
