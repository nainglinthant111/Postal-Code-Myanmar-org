"use client"
import React, {useEffect} from "react";
import Image from "next/image";
import country from "../../../public/myanmar_land.png"
import {FileJson, Book} from 'lucide-react';
import {useRouter} from "next/navigation";

const page = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()

    const gotoService = () => {
        router.push('/docs')
    }

    const gotoState = () => {
        router.push('/demo')
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
            router.prefetch('/docs')
            router.prefetch('/demo')
        }, [router]
    )
    return (
        <div className="w-full min-h-screen">
            <div
                className="sm:flex justify-center items-center sm:pt-10 pt-16 text-justify sm:px-44">
                <div className="sm:w-1/2 p-6">
                    <div>
                        <div className="text-2xl font-bold font-poppin">
                            Myanmar Postal Code API
                        </div>
                        <div className="text-gray-400 pt-10 font-poppin">
                            Welcome to the Myanmar Postal Code API! Our API provides free access to accurate postal code
                            data
                            for locations across Myanmar. Whether you are building a website, mobile app, or integrating
                            postal
                            code functionality into your software, our API makes it easy to retrieve postal code
                            information
                            quickly and reliably.
                            <ul className="sm:pt-8 grid gap-y-2 font-poppin">
                                <li><span className="text-black font-bold">1.Comprehensive Data:</span> Access
                                    up-to-date postal code information for all regions in
                                    Myanmar.
                                </li>
                                <li><span className="text-black font-bold">2.Easy Integration:</span> Simple API
                                    endpoints for easy
                                    integration into your
                                    applications.
                                </li>
                                <li><span className="text-black font-bold">3.Accurate Results:</span> Reliable data
                                    sourced from
                                    official postal authorities to ensure
                                    accuracy.
                                </li>
                                <li><span className="text-black font-bold">4.Free to Use:</span> Our API is completely
                                    free to use
                                    for both commercial and
                                    non-commercial
                                    projects.
                                </li>
                            </ul>
                            <div className="sm:pt-2">
                                This API is free and grants you unlimited access to our postal code data for your
                                development needs.
                            </div>
                            <div className="sm:flex justify-center items-center pt-10 sm:gap-14 grid gap-y-4">
                                <button className="flex justify-between bg-green-400 px-6 py-3 rounded-sm text-white"
                                        onClick={gotoService}>
                                    <span className="pr-4">Read Docs</span>
                                    <Book/>
                                </button>
                                <button className="flex justify-between bg-yellow-400 px-12 py-3 rounded-sm text-white"
                                        onClick={gotoState}>
                                    <span className="pr-4">Demo</span>
                                    <FileJson/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sm:w-1/2 font-poppin">
                    <div className="p-4 mt-4 hidden sm:flex justify-center items-center">
                        <Image src={country} alt="logo" className="rounded-lg"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
