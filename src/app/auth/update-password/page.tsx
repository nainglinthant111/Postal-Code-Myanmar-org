"use client";
import React from "react";
import { KeyRound, MoveLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const gotoProfile = () => {
    router.push("/profile");
  };
  console.log("this is log");
  
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="border rounded-xl p-6 mb-4">
        <KeyRound />
      </div>
      <div className="text-3xl font-bold mb-4">Set New Password</div>
      <div className="text-sm text-gray-500 mb-8">
        Must be at least 8 characters.
      </div>
      <div className="md:w-80 md:mt-4">
        <div>Current Password</div>
        <Input
          type="password"
          placeholder="Password"
          className="md:mt-2 border md:py-1 md:px-3 rounded-sm w-full"
        />
      </div>
      <div className="md:w-80 mt-4">
        <div>Password</div>
        <Input
          type="password"
          placeholder="Password"
          className="md:mt-2 border md:py-1 md:px-3 rounded-sm w-full"
        />
      </div>
      <div className="md:w-80 md:mt-4">
        <div>Confirm Password</div>
        <Input
          type="password"
          placeholder="Password"
          className="md:mt-2 border md:py-1 md:px-3 rounded-sm w-full"
        />
      </div>
      <Button className="w-full max-w-xs md:mt-6" onClick={gotoProfile}>
        Update
      </Button>
      <Link href="/profile">
        <div className="flex md:mt-6 cursor-pointer">
          <MoveLeft />
          <span className="md:ml-2">Back to Profile</span>
        </div>
      </Link>
    </div>
  );
};

export default Page;