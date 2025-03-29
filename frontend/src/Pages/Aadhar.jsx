import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Aadhar = () => {
    const [ aadharNumber, setAadharNumber ] = useState( '' );
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate();

    const handleSubmit = async ( e ) => {
        e.preventDefault();
        // Handle form submission
        if ( aadharNumber.length !== 12 ) {
            toast.error( 'Invalid Aadhar number' );
            return;
        }
        try {
            console.log( backendUrl );

            const res = await axios.post( backendUrl + '/aadhar', { aadharNumber }, {withCredentials:true} );
            if ( res.data.success ) { 
                navigate( '/complaint' );
            } else {
                toast.error( res.data.message );
            }
            console.log( 'Aadhar Number:', aadharNumber );
        }catch ( error ) {
            toast.error( error.message );
            console.log( error );
        }
    };
    const handleChange = ( e ) => {
        const value = e.target.value;
        if ( value.length <= 12 && /^[0-9]*$/.test( value ) ) {
            setAadharNumber( value );
        }
    };

    return (
        <div className='flex items-center justify-center mt-44 bg-black max-sm:mx-4'>
            <div className='p-8 rounded-lg shadow-lg border'>
                <h2 className='text-2xl font-bold text-white mb-4'>Enter Your Aadhar Number</h2>
                <form onSubmit={handleSubmit} >
                    <div className='mb-4'>
                        <label className='block text-white text-sm font-bold mb-2' htmlFor='aadhar'>
                            Aadhar Number
                            <span className='ml-1 text-gray-500 opacity-75'>
                                (Your Aadhar number will not be stored)
                            </span>
                        </label>
                        <input
                            type='text'
                            id='aadhar'
                            value={aadharNumber}
                            onChange={handleChange}
                            className='w-full p-2 border rounded bg-black text-white'
                            placeholder='Enter your Aadhar number'
                            required
                        />
                    </div>
                    <button
                        type='submit'
                        className='w-full py-2 px-4 font-bold rounded hover:bg-red-800 bg-red-700 hover:text-white transition duration-300'
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Aadhar;