'use client'
import React from "react";
import { Box } from "lucide-react";
import Endpoint from "../../app/components/_endpoint"
import Usage from "../../app/components/_usage"
import detail from "../../../public/detail.png"
import Footer from "../components/_footer"
import Image from "next/image";

const page = () => {

    return (
        <div className="container mx-auto px-4 pt-8">
            <div className="max-w-5xl mx-auto sm:mt-14 mt-14">
                <div className="font-bold text-2xl text-yellow-600">
                    How to use it?
                </div>
                <div className="text-gray-400 sm:pt-8 pt-6 sm:mr-10">
                    Myanmar Postal Code API can be used with any type of project that needs postal code and township
                    of Myanmar in JSON format. You can use examples below to check how Myanmar Postal Code API works
                    and feel free to enjoy it in your awesome projects!
                </div>
                <div className="font-bold text-2xl text-yellow-600 sm:mt-10 mt-6">
                    How postal code work
                </div>
                <div className="pt-6">
                    <Image
                        src={detail}
                        alt="detail_ing"
                        className="w-full w-[500px] sm:w-[600px]"
                    />
                </div>
                <div className="font-bold text-2xl flex items-center gap-2 mt-6">
                    <Box />
                    <div className="text-yellow-600">
                        States and Postal Codes
                    </div>
                </div>
                <Endpoint />
                <Usage />
            </div>
            <Footer />
        </div>
    );
};

export default page;
