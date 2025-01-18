import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [ isOpen, setIsOpen ] = useState( false );

    return (
        <div className="text-white w-full fixed top-0 z-50 bg-black">
            <div className="flex flex-wrap p-5 px-8 items-center justify-between ">
                <Link to='/' className="text-xl font-bol">./TeamOS</Link>

                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen( !isOpen )}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        )}
                    </svg>
                </button>

                <nav
                    className={`${ isOpen ? "block" : "hidden"
                        } md:flex md:flex-row md:items-center md:gap-10 w-full md:w-auto text-lg justify-center `}
                >
                    <Link to="/" className="block py-2 md:py-0 p-5 text-[#ff0000]">Home</Link>
                    <Link to="/faq" className="block py-2 md:py-0 hover:text-gray-700">FAQs</Link>
                    <Link to="/log" className="block py-2 md:py-0 hover:text-gray-700">Real Time Logs</Link>
                    <Link to="/about" className="block py-2 md:py-0 hover:text-gray-700">About</Link>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;