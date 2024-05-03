import React from "react";

const page = () => {
    return (
        <div className="grid gap-y-6 sm:pt-28 sm:px-40 pt-20 sm:pb-7 px-6 text-justify">
            <div className="text-xl font-bold font-poppin">
                About Us
            </div>
            <div className="text-gray-400 font-poppin">
                Welcome to Myanmar Postal Code API! We are dedicated to providing developers, businesses, and
                individuals with access to accurate and up-to-date postal code data for locations across Myanmar. Our
                mission is to simplify the process of integrating postal code functionality into applications, websites,
                and software systems, empowering users to enhance their projects with reliable geographic information.
            </div>
            <div className="text-xl font-bold font-poppin">
                Our Vision
            </div>
            <div className="text-gray-400 font-poppin">
                At Myanmar Postal Code API, our vision is to facilitate seamless access to postal code data, enabling
                developers to create innovative solutions that improve user experiences and streamline operations. We
                believe in the power of technology to connect people and communities, and accurate postal code data is a
                crucial component of this digital ecosystem.
            </div>
            <div className="text-xl font-bold font-poppin">
                Why Choose Us?
            </div>
            <div className="text-gray-400 font-poppin">
                <ul className="grid gap-y-1 sm:pt-2">
                    <li><span className="text-black font-bold">Accurate Data:</span> We source our postal code data from
                        official sources to ensure accuracy and reliability.
                        Ease of Integration: Our API is designed for easy integration into a wide range of applications
                        and
                        platforms.
                    </li>
                    <li><span className="text-black font-bold">Free Access:</span> We offer a free API key with
                        unlimited access to our postal code data, eliminating
                        financial barriers for developers.
                    </li>
                    <li><span className="text-black font-bold">Dedicated Support:</span> Our team is committed to
                        providing excellent customer support, assisting
                        users with
                        any questions or issues they may encounter.
                        Get Started Today!
                    </li>
                </ul>
            </div>
            <div className="text-gray-400 font-poppin sm:pb-[75px] pb-8">
                Join thousands of developers and businesses who rely on Myanmar Postal Code API for accurate postal code
                data. Sign up for a free API key and start integrating postal code functionality into your projects
                today!
            </div>
        </div>
    );
};

export default page;
