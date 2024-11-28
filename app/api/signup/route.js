import express from 'express';
import {router} from "next/client";

const PORT = 3000;
const route = express.Router();

router.post('/api/signup', async(req,res) =>{
    const {name,email, password} = req.body;

    try{
        if (!name || !email || !password){
            return res.status(400).json({error: 'Please fill all fields'});
        }
        if (password!= confirmPassword){
            return res.status(400).json({error: 'Password do not match'});
        }
        const existingUser = await User.findOne({email});
        if (existingUser){
            return res.status(400).json({error: 'An account with this email already exists'});
        }
        // i am skipping hashing password for now

        const newUser = new User({
            name,
            email,
            password
        });

        await newUser.save();

        res.status(201).json({message: 'User created successfully'});

    } catch (error){
        console.error('Error during sign up: ',error);
        res.status(500).json({message:'Server error.'});
    }
});