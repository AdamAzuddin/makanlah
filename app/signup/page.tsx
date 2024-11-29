"use client";
import React, { useState } from "react";
import axios, {toFormData} from "axios";

const Customer = () => <div>Customer Component</div>;
const Driver = () => <div>Driver Component</div>;
const Merchant = () => <div>Merchant Component</div>;

// Public variables to store the input values
let signUpRole ='';
let signupEmail = '';
let signUp = '';
let signUpPassword = '';
let confirmPassword = '';


const PageCust: React.FC = () => {
  const [selectedComponent, setSelectedComponent] = useState<string>("Customer");

  const [role, setRole] = useState<number>(0);
  const [email, setEmail] = useState('');
  const [names, setNames] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const setRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedComponent(value);

    switch (value) { // customer 0, driver 1, merchant 2
      case "Driver":
        setRole(1);
        break;
      case "Merchant":
        setRole(2);
        break;
      default:
        setRole(0);
        break;
    }
  };

  const handleSubmit = async (e: React.FormEvent) =>{
    e.preventDefault();
    signUpRole  = role;
    signupEmail = email;
    signUp = names;
    signUpPassword = password;
    // confirmPassword = confirmPassword;

    // make the pass and confirm the same
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Sign up successful!");

    console.log("Sending request...");
    axios
        .post('/api/signup',{
            role: signUpRole,
            email: signupEmail,
            names: signUp,
            password: signUpPassword
        })
        .then((response) => {
            console.log('Variable sent to backend:', response.data);
        })
        .catch((error) => {
          console.error('Error sending variable to backend:', error);
        })
    }

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
        <form style={styles.card} onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label htmlFor="userType" style={styles.label}>
              Sign up as :
            </label>
            <select
              id="userType"
              style={styles.input}
              value={selectedComponent}
              onChange={setRoleChange}
              // onChange = {(e) => setSelectedComponent(e.target.value)}
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
              type="text"
              id="name"
              placeholder="name"
              style={styles.input}
              value={names} //backend
              onChange = {(e) => setNames(e.target.value)} //backend
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
              value ={email} //backend
              onChange={(e) => setEmail(e.target.value)} //backend
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
              value = {password} //backend
              onChange={(e) => setPassword(e.target.value)} //backend
            />
          </div>

          {/* Confirm Password Input */}
          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}></label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm password"
              style={styles.input}
              value = {confirmPassword} // backend
              onChange={(e)=> setConfirmPassword(e.target.value)} // backend
            />
          </div>

          {/* Login Button */}
          <button type="submit" style={styles.button} onChange={handleSubmit}>Sign Up</button>
        </form>
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
    color: "#black",
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

export default PageCust;
