import React from "react";
import { X } from "lucide-react";
import { closeDisplayProps } from "@/app/types";

const Menu = ({ closeDisplay, isAuthenticated }: closeDisplayProps) => {
  return (
    <div>
      <div className="absolute z-10 w-full bg-white p-4 h-screen flex-col items-center justify-center">
        <div className="mb-4 flex justify-end mr-2 mt-3" onClick={closeDisplay}>
          <X />
        </div>
        <div className="my-10 flex flex-col items-center justify-center pt-32">
          <a
            href="/home-page"
            className="mb-4 font-bold text-xl"
            onClick={closeDisplay}
          >
            Home
          </a>
          <a
            href="/demo"
            className="mb-4 font-bold text-xl"
            onClick={closeDisplay}
          >
            Demo
          </a>
          <a
            href="/docs"
            className="mb-4 font-bold text-xl"
            onClick={closeDisplay}
          >
            Docs
          </a>
          <a
            href="/about"
            className="mb-4 font-bold text-xl"
            onClick={closeDisplay}
          >
            About
          </a>
          {isAuthenticated ? (
            <a
              href="/profile"
              className="mb-4 font-bold text-xl"
              onClick={closeDisplay}
            >
              Profile
            </a>
          ) : (
            <div>
              <a
                href="/auth/sign-in"
                className="px-4 py-1.5 border-2 border-blue-500 rounded-lg text-blue-500 text-lg cursor-pointer"
                onClick={closeDisplay}
              >
                Login
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
