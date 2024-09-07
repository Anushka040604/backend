import connectDB from './db/index.js';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config({
    path: './.env'
});

const app = express();

// Connect to MongoDB
connectDB();

// Start the Express server
app.listen(process.env.PORT, () => {
    console.log(`App is listening on port ${process.env.PORT}`);
});

app.on('error', (error) => {
    console.error('Server error:', error);
});










/*import mongoose from "mongoose"
import dotenv from "dotenv"
import { DB_NAME } from "./constants";
import express from "express"
//; cleaning purpose
dotenv.config();
const app=express()
;(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",()=>{
            console.log("Error:",error);
            throw error;
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("Error:",error)
        throw error;
    }
})()*/