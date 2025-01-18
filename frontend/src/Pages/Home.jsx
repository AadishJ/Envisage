import React, { useState } from 'react'
import { FaHandFist } from "react-icons/fa6";
import { FaHandMiddleFinger } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import HeatMap from '../components/HeatMap';



const Home = () => {

    return (
        <div className='flex'>
            <div className='flex flex-col m-44 text-5xl gap-3 flex-wrap max-xl:m-10 max-xl:text-xl'>
                <div className='text-red-600 text-xl w-10/12'>
                    INDIA'S FIRST BLOCKCHAIN BASED COMPLAINT MANAGEMENT SYSTEM
                </div>
                <div className='flex items-center gap-5'>
                    <div>
                        EVERY VOICE MATTERS
                    </div>
                    <div className='trasition duration-500 ease-in-out'>
                        <FaHandFist fill='red' />
                    </div>
                </div>
                <div className='flex gap-3 max-xl:flex-col'>
                    <div className='text-base w-10/12 opacity-75'>
                        App for filing complaints on the blockchain is a decentralized platform designed to promote transparency and accountability in government offices by leveraging blockchain technology
                    </div>
                    <div className=''>
                    </div>
                </div>
                    <Link to='/aadhar' className='w-48 bg-[#ff0000] px-4 py-3 rounded-lg text-lg text-center hover:bg-red-900'>
                        REGISTER NOW
                    </Link>
            </div>
            <div className='mr-8 mb-5'>
            <HeatMap/>

            </div>
        </div>
    )
}

export default Home
