import axios from 'axios';
import React, { useState } from 'react';
import express from 'express';
import bodyParser from 'body-parser';

const PORT = 3000;
const app = express();

app.use(bodyParser.json());

app.post('/api/admin_sql', (req, res) => {
    const { money, id, name, email, password, address } = req.body;
    console.log('Received data:', { money, id, name, email, password, address });
    res.json({ message: "Data received successfully!" });
});

app.get("/api/testing", (req, res) => {
    res.json({ message: "Testing 123" });
});