import React from "react";
import { MoveLeft, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="min-h-screen">
      <MoveLeft />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto mt-6">
          <div className="font-bold text-xl">Email</div>
          <div className="text-gray-500 mt-2 w-full">Minthant@gmail.com</div>
          <div className="font-bold text-xl mt-4">Password</div>
          <div className="flex justify-between">
            <div className="mt-2 text-gray-500 mr-10">123456</div>
          </div>
          <div className="mt-2">
            <Button>Update Password</Button>
          </div>
          <div className="font-bold text-xl mt-4">Api Key</div>
          <div className="mt-2">
            <Button>Generate</Button>
          </div>
          <div className="flex justify-between mt-2">
            <div className="text-gray-500">this is key</div>
            <div className="cursor-pointer">
            <Copy />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
