// require("dotenv").config({path:'./env'});

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

import connectDB from './db/index.js'; // use correct path and extension
import dotenv from 'dotenv';
dotenv.config();

connectDB()

/*
import express from "express";
const app = express();

( async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    } catch (error) {
        console.log(error);
        
    }
}) ()

*/