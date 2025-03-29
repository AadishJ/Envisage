import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Complaint = () => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [ formData, setFormData ] = useState( {
        name: '',
        pincode: '',
        officeName: '',
        date: '',
        officeAddress: '',
        briefDescription: '',
        fullDescription: ''
    } );

    const handleChange = ( e ) => {
        const { name, value } = e.target;
        if ( name === 'pincode' && value.length > 6 ) {
            return;
        }
        setFormData( {
            ...formData,
            [ name ]: value
        } );
    };

    const handleSubmit = async ( e ) => {
        e.preventDefault();
        if ( formData.pincode.length !== 6 ) {
            toast.error( 'Pincode must be exactly 6 digits' );
            return;
        }
        try {
            const res = await axios.post( backendUrl + '/complaint', formData, { withCredentials: true } );
            if ( res.data.success ) {
                toast.success( 'Complaint submitted successfully' );
            } else {
                toast.error( res.data.message );
            }
        } catch ( error ) {
            toast.error( 'An error occurred while submitting the complaint' );
        }
        console.log( 'Form Data:', formData );
    };

    return (
        <div className='flex items-center justify-center mt-24'>
            <div className='p-8 rounded-lg shadow-lg w-full max-w-md border'>
                <h2 className='text-2xl font-bold text-white mb-4'>Submit Your Complaint</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label className='block text-white text-sm font-bold mb-2' htmlFor='name'>
                            Name (Optional)
                        </label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            className='w-full p-2 border rounded bg-black text-white focus:border-red-600'
                            placeholder='Enter your name'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-white text-sm font-bold mb-2' htmlFor='pincode'>
                            Pincode
                        </label>
                        <input
                            type='text'
                            id='pincode'
                            name='pincode'
                            value={formData.pincode}
                            onChange={handleChange}
                            className='w-full p-2 border rounded bg-black text-white focus:border-red-600'
                            placeholder='Enter your pincode'
                            pattern='[0-9]{6}'
                            required
                            title='Pincode must be exactly 6 digits'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-white text-sm font-bold mb-2' htmlFor='officeName'>
                            Office Name or Officer's Position
                        </label>
                        <input
                            type='text'
                            id='officeName'
                            name='officeName'
                            value={formData.officeName}
                            onChange={handleChange}
                            className='w-full p-2 border rounded bg-black text-white focus:border-red-600'
                            placeholder='Enter the office name or Officers position'
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-white text-sm font-bold mb-2' htmlFor='officeName'>
                            Office Address or Officer's Info
                        </label>
                        <input
                            type='text'
                            id='officeAddress'
                            name='officeAddress'
                            value={formData.officeAddress}
                            onChange={handleChange}
                            className='w-full p-2 border rounded bg-black text-white focus:border-red-600'
                            placeholder='Enter the Office Address'
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-white text-sm font-bold mb-2' htmlFor='date'>
                            Date
                        </label>
                        <input
                            type='Date'
                            id='date'
                            name='date'
                            value={formData.date}
                            onChange={handleChange}
                            placeholder='Enter the date'
                            className='w-full p-2 border rounded bg-black text-white'
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-white text-sm font-bold mb-2' htmlFor='briefDescription'>
                            Brief Description (50 Characters)
                        </label>
                        <textarea
                            id='briefDescription'
                            name='briefDescription'
                            value={formData.briefDescription}
                            onChange={handleChange}
                            className='w-full p-2 border rounded bg-black text-white '
                            placeholder='Enter a brief description'
                            maxLength={50}
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-white text-sm font-bold mb-2' htmlFor='fullDescription'>
                            Full Description
                        </label>
                        <textarea
                            id='fullDescription'
                            name='fullDescription'
                            value={formData.fullDescription}
                            onChange={handleChange}
                            className='w-full p-2 border rounded bg-black text-white '
                            placeholder='Enter the full description'
                            required
                        />
                    </div>
                    <button
                        type='submit'
                        className='w-full py-2 px-4 bg-black text-red-600 font-bold rounded hover:bg-red-700 hover:text-white transition duration-300'
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Complaint;