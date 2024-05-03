import React from 'react';
import loading from '../../../public/loading.gif'
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const _Loading = () => {
    return (
        <div className="w-full h-screen">
            <div className="flex justify-center items-center pt-96">
                <Image src={loading} alt="loading" className="w-10 h-10"/>
                <div>
                    <TypeAnimation
                        sequence={[
                            'Please wait we are preparing ...',
                            1000,
                            'Loading data ...',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '1em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </div>
            </div>
        </div>
    );
};

export default _Loading;