import express from 'express';
import {getComplaints, postComplaint} from '../Controllers/ComplaintController.js';

const ComplaintRouter = express.Router();

ComplaintRouter
    .route( '/' )
    .post( ( req, res ) => postComplaint( req, res ) )
    .get( ( req, res ) => getComplaints( req, res ) );
   
export default ComplaintRouter;