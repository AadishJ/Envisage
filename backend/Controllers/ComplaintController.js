import { AadharModel } from "../Models/Aadhar.js";
import { ComplaintModel } from "../Models/Complaint.js";
import query from 'india-pincode-search'
import { StateModel } from "../Models/StateModel.js";
import { spawn } from 'child_process';



const capitalizeWords = ( str ) => {
    const exceptions = [ "Dadra and Nagar Haveli", "Andaman and Nicobar Islands" ];
    if ( exceptions.includes( str ) ) {
        return str;
    }
    return str
        .toLowerCase()
        .split( ' ' )
        .map( word => word.charAt( 0 ).toUpperCase() + word.slice( 1 ) )
        .join( ' ' );
};


const postComplaint = async ( req, res ) => {
    const { name, pincode, officeAddress, officeName, date, briefDescription, fullDescription } = req.body;
    const str = pincode +" "+ officeAddress +" "+ date;
    console.log(str);
    const args = spawn( 'python', [ '../backend/Controllers/implimentation.py', str ] );
    // Handle Python script output
    args.stdout.on( 'data', ( data ) => {
        console.log( `stdout: ${ data }` );
    } );
    
    args.stderr.on( 'data', ( data ) => {
        console.error( `stderr: ${ data }` );
    } );
    
    args.on( 'close', async ( code ) => {
        console.log( `child process exited with code ${ code }` );
    })
    if ( req.cookies.uid ) {
        try {
            const user = await AadharModel.findById( req.cookies.uid );
            if ( !user ) {
                return res.json( { success: false, message: 'User not found' } );
            }

            const existingComplaint = await ComplaintModel.findOne( { userId: user._id, pincode } );
            if ( existingComplaint ) {
                return res.json( { success: false, message: 'You have already submitted a complaint for this pincode' } );
            }

            const newComplaint = await ComplaintModel.create( {
                userId: user._id,
                name,
                pincode,
                officeAddress,
                officeName,
                date,
                brief:briefDescription,
                description: fullDescription
            } );

            if ( query.search( pincode ).length !== 0 ) {
                const stateName = capitalizeWords( query.search( pincode )[ 0 ].state );
                const state = await StateModel.findOne( { name: stateName } );
                if ( state ) {
                    state.number += 1;
                    await state.save();
                } 
            } else {
                console.log( 'State not found' );
            }
                
            return res.json( { success: true } );
        } catch ( error ) {
            console.error( error );
            return res.json( { success: false, message: 'An error occurred while submitting the complaint' } );
        }
    } else {
        return res.json( { success: false, message: 'Re-Enter your Aadhar Details' } );
    }
};

const getComplaints = async ( req, res ) => { 
    try {
        const complaints = await ComplaintModel.find( {} );
        const states = await StateModel.find( {} );
        return res.json( { success: true, complaints,states } );
    } catch ( error ) {
        console.error( error );
        return res.json( { success: false, message: 'An error occurred while fetching complaints' } );
    }
}

export { postComplaint, getComplaints };