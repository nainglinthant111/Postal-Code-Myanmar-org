"use client";
import React from "react";
import { Loader, MoveLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const gotoReset = () => {
    router.push("/auth/otp");
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="border rounded-xl p-6 mb-4">
        <Loader />
      </div>
      <div className="text-3xl font-bold mb-4">Forget Password?</div>
      <div className="text-sm text-gray-500 mb-8">
        No worries, we'll send you reset instructions.
      </div>
      <div className="md:w-80">
        <div>Email</div>
        <Input
          type="email"
          placeholder="Email"
          className="md:mt-2 border md:py-1 md:px-3 rounded-sm w-full"
        />
      </div>
      <Button className="w-full max-w-xs md:mt-6" onClick={gotoReset}>
        Reset password
      </Button>
      <Link href="/auth/sign-in">
        <div className="flex md:mt-6 cursor-pointer">
          <MoveLeft />
          <span className="md:ml-2">Back to log in</span>
        </div>
      </Link>
    </div>
  );
};

export default Page;