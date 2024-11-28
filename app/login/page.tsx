"use client";
import { useRouter } from "next/navigation";
import React from "react";

const LoginPage = () => {
  const router = useRouter();
  const handleButtonClick = (role: string) => {
    console.log(`Navigating to ${role} login page`);
    // Perform navigation or other actions here
    router.push(`/login/${role}`);
  };

  return (
    <div style={styles.container}>
      {/* Left Section with Login Options */}
      <div style={styles.card}>
        <div style={styles.card2}>
          <div style={styles.logo}>
            <img
              src="nasi_lemak.svg" // Replace with your image path in the public directory
              alt="Nasi lemak logo"
              style={styles.image}
            />
            <h1 style={styles.heading}>
              <span style={styles.loginText}>Makan</span>
              <span style={styles.lahText}>Lah!</span>
            </h1>
          </div>
          <div style={styles.buttons}>
            <button
              style={styles.merchantButton}
              onClick={() => handleButtonClick("merchant")}
            >
              Login As Merchant
            </button>
            <button
              style={styles.customerButton}
              onClick={() => handleButtonClick("customer")}
            >
              Login As Customer
            </button>
            <button
              style={styles.driverButton}
              onClick={() => handleButtonClick("driver")}
            >
              Login As Driver
            </button>
          </div>
          <div>
            <p style={styles.paragraph}>
              Don't have an account?
              <a href="/signup" style={styles.blueLink}>
                Sign up here
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Right Section with Image */}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#FFC700", // Yellow background
  },
  card: {
    width: "50%",
    padding: "60px",
    textAlign: "center",
    backgroundColor: "#D9D9D9",
    borderRadius: "20px",
    margin: "auto",
    // display: "flex",
    justifyContent: "center",
  },
  card2: {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "20px",
  },
  logo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center", // Centers logo and text horizontally
    gap: "10px", // Adds space between the image and text
    marginBottom: "10px", // Adjust margin below the logo if needed
  },
  image: {
    width: "100px",
    height: "auto",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  loginText: {
    color: "black",
  },
  lahText: {
    color: "#F17228",
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  merchantButton: {
    padding: "15px",
    fontSize: "1rem",
    backgroundColor: "#FF5722", // Orange
    border: "none",
    borderRadius: "5px",
    color: "#fff",
    cursor: "pointer",
  },
  customerButton: {
    padding: "15px",
    fontSize: "1rem",
    backgroundColor: "#8BC34A", // Green
    border: "none",
    borderRadius: "5px",
    color: "#fff",
    cursor: "pointer",
  },
  driverButton: {
    padding: "15px",
    fontSize: "1rem",
    backgroundColor: "#00BCD4", // Blue
    border: "none",
    borderRadius: "5px",
    color: "#fff",
    cursor: "pointer",
  },
  imageContainer: {
    width: "40%",
  },
  blueLink: {
    color: "#0000EE",
    textDecoration: "none",
  },
  paragraph: {
    paddingTop: "21px",
  },
};

export default LoginPage;
