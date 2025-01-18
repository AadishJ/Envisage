import mongoose from 'mongoose';

const ComplaintSchema = new mongoose.Schema( {
    userId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
    },
    pincode: {
        type: Number,
        required: true,
    },
    officeAddress: {
        type: String,
        required: true,
    },
    officeName: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    brief: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },

}, { timestamps: true } );

const ComplaintModel = mongoose.models.complain || mongoose.model( 'complain', ComplaintSchema );

export { ComplaintModel };