'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../globals.css';
import './css.css';

// Public variables to store the input values
let merchantId = '';
let merchantName = '';
let merchantEmail = '';
let merchantPassword = '';
let merchantAddress = '';
let openingHours = '';
let phoneNumber = '';

const AdminPage: React.FC = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [hours, setHours] = useState('');
    const [number, setNumber] = useState('');

    const handleAddAll = () => {
        merchantId = id;
        merchantName = name;
        merchantEmail = email;
        merchantPassword = password;
        merchantAddress = address;
        openingHours = hours;
        phoneNumber = number;

        console.log("Sending request...");
        axios
            .post('/api/admin_mysql_merchant',{
                id: merchantId,
                name: merchantName,
                email: merchantEmail,
                password: merchantPassword,
                address: merchantAddress,
                hours: openingHours,
                number: phoneNumber
            })
            .then((response) => {
                console.log('Variable sent to backend:', response.data);
            })
            .catch((error) => {
                console.error('Error sending variable to backend:', error);
            });
    };

    return (
        <div style={{padding: '20px'}}>
            <h1>Merchant admin</h1>
            <div>
                <label>Merchant ID:</label>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)}/>
            </div>
            <div>
                <label>Merchant Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <label>Merchant Email:</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Merchant password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <label>Merchant Address:</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)}/>
            </div>
            <div>
                <label>Merchant opening hours (text) : </label>
                <input type="text" value={hours} onChange={(e) => setHours(e.target.value)}/>
            </div>
            <div>
                <label>Merchant phone number:</label>
                <input type="text" value={number} onChange={(e) => setNumber(e.target.value)}/>
            </div>
            <button onClick={handleAddAll}>press this</button>
        </div>
    );
};

export default AdminPage;