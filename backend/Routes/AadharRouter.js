import express from 'express';
import AadharPost from '../Controllers/AadharController.js';

const AadharRouter = express.Router();


AadharRouter
    .route( '/' )
    .post( ( req, res ) => AadharPost( req, res ) );


export default AadharRouter;