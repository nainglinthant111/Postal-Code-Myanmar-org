import React, {useEffect} from "react";
import {Menu} from "lucide-react";
import {useRouter} from "next/navigation";
import {displayProps} from "../types";
import Image from "next/image";
import logo from "../../../public/myanmar.png"
import { Button } from "@/components/ui/button";

const _nav = ({toggleDisplay}: displayProps) => {
    const router = useRouter();

    const gotoHome = () => {
        router.push("/");
    };

    const gotoState = () => {
        router.push("/demo");
    };

    const gotoService = () => {
        router.push("/docs");
    };

    const gotoAbout = () => {
        router.push("/about");
    };

    useEffect(() => {
        router.prefetch("/");
        router.prefetch("/demo");
        router.prefetch("/docs");
        router.prefetch("/about");
    }, [router]);
    return (
        <div
            className="flex justify-between fixed z-10 items-center border-b-2 p-4 px-4 sm:px-32 w-full bg-white">
            <div className="cursor-pointer flex justify-center items-center" onClick={gotoHome}>
                <Image src={logo} alt="logo" className="w-8 h-8"/>
                <span className="text-xl ml-1">M</span>
                <span className="text-base pt-1">yanmar</span>
                <span className="text-xl ml-1">P</span>
                <span className="text-base pt-1">ostal</span>
                <span className="text-xl ml-1">C</span>
                <span className="text-base pt-1">ode</span>
            </div>
            <div className="flex justify-center items-center">
                <div onClick={gotoHome} className="cursor-pointer hidden sm:block text-gray-600 text-lg">
                    Home
                </div>
                <div onClick={gotoState} className="cursor-pointer hidden sm:block text-gray-600 text-lg mx-5">
                    Demo
                </div>
                <div onClick={gotoService} className="cursor-pointer hidden sm:block text-gray-600 text-lg mr-5">
                    Docs
                </div>
                <div onClick={gotoAbout} className="cursor-pointer hidden sm:block text-gray-600 text-lg mr-5">
                    About
                </div>
                <div className="sm:hidden" onClick={toggleDisplay}>
                    <Menu/>
                </div>
                <div className="hidden sm:block mr-5">
                    <button className="px-4 py-1.5 border-2 border-blue-500 rounded-lg text-blue-500 text-lg">Login</button>
                </div>
            </div>
        </div>
    );
};

export default _nav;
