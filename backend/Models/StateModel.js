import mongoose from 'mongoose';

const StateSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true,
        unique: true,
    },
    number: {
        type: Number,
        required: true,
        default: 0,
    },
}, { timestamps: true } );

const StateModel = mongoose.models.state || mongoose.model( 'state', StateSchema );

export { StateModel };