'use client'
import React from "react";
import {Box} from "lucide-react";
import Endpoint from "../../app/components/_endpoint"
import Usage from "../../app/components/_usage"
import detail from "../../../public/detail.png"
import Image from "next/image";

const page = () => {

    return (
        <div className="w-full font-poppin">
            <div className="sm:px-36 px-8 grid gap-y-10">
                <div className="sm:pt-28 pt-20">
                    <div className="font-bold text-2xl text-yellow-600">
                        How to use it?
                    </div>
                    <div className="text-gray-400 sm:pt-8 sm:mr-10">
                        Myanmar Postal Code API can be used with any type of project that needs postal code and township
                        of myanmar in JSON format. you can use examples below to check how Myanmar Postal Code API works
                        and feel free to enjoy it in your awesome projects!
                    </div>
                </div>
                <div>
                    <div className="font-bold text-2xl text-yellow-600">
                        How postal code work
                    </div>
                    <div className="pt-6">
                        <Image src={detail} alt="detail_ing" />
                    </div>
                </div>
                <div className="font-bold text-2xl flex items-center gap-2">
                    <Box/>
                    <div className="text-yellow-600">
                        States and Postal Codes
                    </div>
                </div>
                <Endpoint />
                <Usage />
            </div>
        </div>
    );
};

export default page;
