"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren, useState } from "react";
import Menu from "@/app/components/_menu";
import Nav from "@/app/components/_nav";
import styles from "../module/nav.module.css";
import { usePathname } from "next/navigation";

const Providers = ({ children }: PropsWithChildren<{}>) => {
  const [display, setDisplay] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const pathname = usePathname();

  const toggleDisplay = () => {
    setDisplay(!display);
  };

  const closeDisplay = () => {
    setDisplay(false);
  };

  const authRoute = [
    "/auth/sign-in",
    "/profile",
    "/auth/update-password",
    "/auth/sign-up",
    "/auth/forget-password",
    "/auth/complete",
    "/auth/otp"
  ];
  const signinRoute = !authRoute.includes(pathname);

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      {display ? (
        <div className={`popup-menu ${styles.slideIn}`}>
          <Menu closeDisplay={closeDisplay} isAuthenticated={isAuthenticated} />
        </div>
      ) : (
        <div>
          {signinRoute && <Nav toggleDisplay={toggleDisplay} isAuthenticated={isAuthenticated} />}
          <div>{children}</div>
        </div>
      )}
    </QueryClientProvider>
  );
};

export default Providers;
