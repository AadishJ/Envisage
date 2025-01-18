import React from 'react'

const About = () => {
    return (
        <div className='m-5 p-5 mt-24'>
            <div className='text-4xl font-bold w-full text-center mb-5'>
                ABOUT US
            </div>
            <p className="text-lg md:text-xl leading-relaxed">
                Our platform is a blockchain-based platform which empowers citizens
                to report incidents of corruption with transparency, security, and accountability.
                By leveraging blockchain technology, we provide a decentralized and immutable system
                where individuals can register complaints anonymously while ensuring the authenticity
                of each submission.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mt-4">
                The platform allows users to report cases such as bribery, embezzlement,
                or misuse of public resources. Each complaint is securely stored on the blockchain,
                making it tamper-proof and publicly accessible, ensuring that justice and
                accountability prevail.
            </p>
            <h2 className="text-2xl font-bold mt-6">Key Features:</h2>
            <ul className="list-disc list-inside text-lg md:text-xl mt-4">
                <li><strong>Transparency:</strong> All registered complaints are visible to the public, fostering accountability.</li>
                <li><strong>Immutability:</strong> Once a complaint is registered, it cannot be altered or deleted, guaranteeing data integrity.</li>
                <li><strong>User-Friendly Interface:</strong> Simple and intuitive for users to report corruption effortlessly.</li>
                <li><strong>Aadhaar-Based Verification:</strong> Ensures the legitimacy of complaints while maintaining user anonymity.</li>
            </ul>
            <p className="text-lg md:text-xl leading-relaxed mt-6">
                Our mission is to create a corruption-free society by empowering individuals with
                a reliable platform to raise their voices against injustice. Together, we can drive
                change and uphold ethical standards in every sphere of life.
            </p>
        </div>
    )
}

export default About