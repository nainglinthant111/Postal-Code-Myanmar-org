"use client";
import React from "react";
import { BadgeCheck, MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const gotoLogin = () => {
    router.push("/auth/sign-in");
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="border rounded-xl p-6 mb-4">
        <BadgeCheck />
      </div>
      <div className="text-3xl font-bold mb-4">All done!</div>
      <div className="text-sm text-gray-500 mb-8">
        Your password has been reset.
      </div>

      <Button className="w-full max-w-xs md:mt-6" onClick={gotoLogin}>
        Back to login
      </Button>
    </div>
  );
};

export default Page;