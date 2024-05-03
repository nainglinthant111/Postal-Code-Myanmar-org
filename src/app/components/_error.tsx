import React from 'react';
import errorGif from "../../../public/error_img.gif"
import Image from "next/image";

const _Error = () => {
    return (
        <div className="w-full">
            <div className="flex justify-center items-center sm:pl-64 py-4">
                <Image src={errorGif} alt="error_img"/>
                <div className="text-xl pt-16">
                    Something went wrong!
                </div>
            </div>
        </div>
    );
};

export default _Error;