"use client"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {PropsWithChildren, useState} from "react";
import Menu from "@/app/components/_menu";
import Nav from "@/app/components/_nav";
import Footer from "@/app/components/_footer";

const Providers = ({children}: PropsWithChildren<{}>) => {
    const [display, setDisplay] = useState(false);

    const toggleDisplay = () => {
        setDisplay(!display);
    };

    const closeDisplay = () => {
        setDisplay(false);
    };
    const queryClient = new QueryClient()
    return <QueryClientProvider client={queryClient}>
        {display ? (
            <>
                <Menu closeDisplay={closeDisplay}/>
            </>
        ) : (
            <>
                <Nav toggleDisplay={toggleDisplay}/>
                <div>
                    {children}
                </div>
                <Footer/>
            </>
        )}
    </QueryClientProvider>
}

export default Providers