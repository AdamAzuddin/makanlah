'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../globals.css';

// Public variables to store the input values
let customerId = '';
let customerName = '';
let customerEmail = '';
let customerPassword = '';
let customerAddress = '';
let customerMoney = '';

const AdminPage: React.FC = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [money, setMoney] = useState('');

    const handleAddAll = () => {
        customerId = id;
        customerName = name;
        customerEmail = email;
        customerPassword = password;
        customerAddress = address;
        customerMoney = money;
    };

    useEffect(() =>{
        axios.post('http://localhost:3000/api/admin',{money : customerMoney, id : customerId, name : customerName, email : customerEmail, password : customerPassword, address : customerAddress})
            .then(response =>{
                console.log('Variable sent to backend:', response.data);
            })
            .catch(error =>{
                console.error('Error sending variable to backend:', error);
            });
    },[customerMoney, customerId, customerName, customerEmail, customerPassword, customerAddress]);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Admin Page</h1>
            <div>
                <label>Customer ID:</label>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            </div>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Email:</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <label>Address:</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div>
                <label>Money:</label>
                <input type="text" value={money} onChange={(e) => setMoney(e.target.value)} />
            </div>
            <button onClick={handleAddAll}>Add All</button>

            <p>{customerId} {customerName} {customerEmail} {customerPassword} {customerAddress} {customerMoney}</p>
        </div>
    );
};

export default AdminPage;