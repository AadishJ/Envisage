import dotenv from 'dotenv';
import express from 'express';
import AadharRouter from './Routes/AadharRouter.js';
import ComplaintRouter from './Routes/ComplaintRouter.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express();

dotenv.config();
app.use( cookieParser() );
app.use( express.json() ); // Add this line to parse JSON request bodies
app.use( cors( { origin: process.env.CLIENT, credentials: true, } ) );

const PORT = process.env.PORT || 5000;

import connectMongoDB from './Config/Connect.js';
connectMongoDB( process.env.MONGO ).then( () => console.log( "MongoDB connected" ) ).catch( ( err ) => console.log( "Error Occured: ", err ) );

app.use( "/aadhar", AadharRouter );
app.use('/complaint', ComplaintRouter);

app.listen( PORT, () => console.log( "Server Started on", PORT ) );