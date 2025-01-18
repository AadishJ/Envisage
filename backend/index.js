const express = require( "express" )
const app = express();

const cors = require( 'cors' );
const cookieParser = require( "cookie-parser" );

app.use( cookieParser() );
app.use( cors( { origin: process.env.CLIENT, credentials: true, } ) );


require( "dotenv" ).config();

const PORT = process.env.PORT || 5000;



const connectMongoDB = require( './Config/Connect' );
connectMongoDB( process.env.MONGO ).then( () => console.log( "MongoDB connected" ) ).catch( ( err ) => console.log( "Error Occured: ", err ) );


app.listen( PORT, () => console.log( "Server Started on", PORT ) );