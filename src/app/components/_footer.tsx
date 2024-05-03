'use client'
import React, {useEffect} from 'react';
import {useRouter} from "next/navigation";

const _Footer = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-white sm:py-2 py-2">
            <div className="text-sm px-6 sm:px-0">
                Copyright © 2024 - All right reserved
            </div>
        </div>
    );
};

export default _Footer;