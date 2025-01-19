import { AadharModel } from '../Models/Aadhar.js';
import bcrypt from 'bcrypt';

const AadharPost = async ( req, res ) => {
    const { aadharNumber } = req.body;
    if ( aadharNumber.length !== 12 ) {
        return res.json( { success: false, message: 'Invalid Aadhar number' } );
    }
    try {
        const aadharRecords = await AadharModel.find( {} );
        for ( const record of aadharRecords ) {
            const isMatch = await bcrypt.compare( aadharNumber, record.number );
            if ( isMatch ) {
                res.cookie( "uid", record._id, {
                    maxAge: 2 * 60 * 60 * 1000,
                    httpOnly: true,
                    sameSite: 'strict',
                } );
                return res.json( { success: true, message: 'Aadhar number already exists' } );
            }
        }

        // Use a unique salt for storing the hashed Aadhar number
        const salt = await bcrypt.genSalt( 10 );
        const hashedAadhar = await bcrypt.hash( aadharNumber, salt );

        const newAadhar = await AadharModel.create( { number: hashedAadhar } );
        res.cookie( "uid", newAadhar._id, {
            maxAge: 2 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: true,
        } );
        return res.json( { success: true } );
    } catch ( err ) {
        console.log( err );
        return res.json( { success: false, message: err.message } );
    }
};

export default AadharPost;