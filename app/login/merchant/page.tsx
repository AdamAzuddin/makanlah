'use client';
import React, { useState } from "react";
import axios from 'axios';

const pageCust = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = async () => {
        console.log("Button pressed.")
        if (!email || !password) {
            setErrorMessage("Email and password are required.");
            console.log("Email and password are required.");
            return;
        }

        setErrorMessage("");


        try {
            const response = await axios
                .post("/api/login/merchant", { email, password })
                .then((response) => {
                    console.log('Variable sent to backend:', response.data);
                })
                .catch((error) => {
                    console.log('Error:', error.response?.data || error.message);
                })

                if(response )


            ;
            console.log("Login successful:", response.data);
            // Redirect or handle success (e.g., navigate to dashboard)
        } catch (error) {
            console.error("Login error:", error.response?.data || error.message);
            setErrorMessage(error.response?.data?.message || "Login failed. Please try again.");
        }
    };

    return (
        <div style={styles.container}>
            {/* Page Header */}
            <h1 style={styles.heading}>Sign In as Merchant</h1>

            {/* Login Card */}
            <div style={styles.back}>
                <div style={styles.card}>
                    {/* Email Input */}
                    <div style={styles.inputGroup}>
                        <label htmlFor="email" style={styles.label}>
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="email"
                            style={styles.input}
                            value={email} //backend
                            onChange={(e) => setEmail(e.target.value)} //backend
                        />
                    </div>

                    {/* Password Input */}
                    <div style={styles.inputGroup}>
                        <label htmlFor="password" style={styles.label}>
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="password"
                            style={styles.input}
                            value={password} //backend
                            onChange = {(e) => setPassword(e.target.value)} //backend
                        />
                    </div>

                    {/* Login Button */}
                    <button style={styles.button} onClick={handleLogin}>Login</button>

                    {errorMessage && (<div style={styles.error}>{errorMessage}</div>)}
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

    error:{
        color:"red",
        marginTop:"10px",
        fontSize:"0.9rem",
        fontWeight:"bold",
    }
};

export default pageCust;