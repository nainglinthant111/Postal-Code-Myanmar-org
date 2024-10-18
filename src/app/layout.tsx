import type {Metadata} from "next";
import "./globals.css";
import Provider from "@/app/components/Provider";
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
    title: "Myanmar Postal Code",
    description: "Myanmar Postal Code",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <Provider>
            {children}
        </Provider>
        <Toaster />
        </body>
        </html>
    );
}
