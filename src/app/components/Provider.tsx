"use client"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {PropsWithChildren, useEffect, useState} from "react";
import Menu from "@/app/components/_menu";
import Nav from "@/app/components/_nav";
import SignIn from "@/app/auth/sign-in/page";
import styles from '../module/nav.module.css';
import { useRouter } from "next/navigation";

const Providers = ({children}: PropsWithChildren<{}>) => {
    const [display, setDisplay] = useState(false);
    const [isAuthenticated,setIsAuthenticated] = useState(true);
    const router = useRouter()

    const toggleDisplay = () => {
        setDisplay(!display);
    };

    const closeDisplay = () => {
        setDisplay(false);
    };

    useEffect(() => {
        if (isAuthenticated) {
            router.push('/home-page')
        }else{
            router.push('/auth/sign-in')
        }
    }, []);
    const queryClient = new QueryClient()
    return <QueryClientProvider client={queryClient}>
        {isAuthenticated ? (
            <>
            {display ? (
            <div className={`popup-menu ${styles.slideIn}`}>
                <Menu closeDisplay={closeDisplay} />
            </div>
        ) : (
            <div>
                <Nav toggleDisplay={toggleDisplay}/>
                <div>
                    {children}
                </div>
            </div>
        )}
            </>
        ): (
            <SignIn />
        )}
    </QueryClientProvider>
}

export default Providers