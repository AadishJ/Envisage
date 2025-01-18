import React from 'react'

const Log = () => {
    const data = [
        {
            pincode: "110001",
            location: "Connaught Place, New Delhi",
            time: "10:30 AM",
            date: "2025-01-15",
            info: "A government official requested a bribe of ₹10,000 to process a routine document verification.",
        },
        {
            pincode: "560001",
            location: "MG Road, Bengaluru",
            time: "2:15 PM",
            date: "2025-01-16",
            info: "Construction project delayed due to demands for an under-the-table payment to clear permits.",
        },
        {
            pincode: "400001",
            location: "Marine Lines, Mumbai",
            time: "4:00 PM",
            date: "2025-01-12",
            info: "Police officer demanded ₹2,000 to avoid issuing a false traffic fine.",
        },
        {
            pincode: "600001",
            location: "T. Nagar, Chennai",
            time: "11:45 AM",
            date: "2025-01-10",
            info: "Local municipality staff asked for ₹5,000 to approve property tax reduction documents.",
        },
        {
            pincode: "700001",
            location: "Park Street, Kolkata",
            time: "3:00 PM",
            date: "2025-01-14",
            info: "Bribe of ₹7,000 requested by an official to expedite passport verification.",
        },
        {
            pincode: "500001",
            location: "Abids, Hyderabad",
            time: "9:30 AM",
            date: "2025-01-13",
            info: "Electricity department official demanded ₹15,000 to resolve a billing dispute.",
        },
        {
            pincode: "302001",
            location: "Pink City, Jaipur",
            time: "12:00 PM",
            date: "2025-01-17",
            info: "Land registration office staff asked for ₹20,000 to clear property documents.",
        },
    ]

    return (
        <div className='mt-24'>
            {data.map( ( item, index ) => (
                <div key={index} className="bg-black border border-red-600 text-white p-3 m-3 rounded-lg">
                    <p className="text-lg">Pincode: {item.pincode}</p>
                    <p className="text-lg">Location: {item.location}</p>
                    <p className="text-lg">Date: {item.date}</p>
                    <p className="text-lg">Info: {item.info}</p>
                </div>
            ) )}
        </div>
    )
}

export default Log