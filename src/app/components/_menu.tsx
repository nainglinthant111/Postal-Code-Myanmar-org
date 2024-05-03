import React from "react";
import { X } from "lucide-react";
import { closeDisplayProps, displayProps } from "@/app/types";

const Menu = ({ closeDisplay }: closeDisplayProps) => {
  return (
    <div>
      <div className="absolute z-10 w-full bg-white p-4 h-screen flex-col items-center justify-center">
        <div className="mb-4 flex justify-end mr-2 mt-3" onClick={closeDisplay}>
          <X />
        </div>
        <div className="flex flex-col items-center justify-center pt-52">
          <a href="/home-page" className="mb-4 font-bold text-xl" onClick={closeDisplay}>
            Home
          </a>
          <a href="/demo" className="mb-4 font-bold text-xl" onClick={closeDisplay}>
            Demo
          </a>
          <a href="/docs" className="mb-4 font-bold text-xl" onClick={closeDisplay}>
            Docs
          </a>
          <a href="/about" className="mb-4 font-bold text-xl" onClick={closeDisplay}>
            About
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
