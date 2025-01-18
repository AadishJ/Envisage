import mongoose from 'mongoose';

const AadharSchema = new mongoose.Schema( {
    number: {
        type: String,
        required: true,
    },
}, { timestamps: true } );

const AadharModel = mongoose.models.aadhar || mongoose.model( 'aadhar', AadharSchema );

export { AadharModel };