"use client";
import React from "react";
import { Mail, MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const gotoComplete = () => {
    router.push("/auth/complete");
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="border rounded-xl p-6 mb-4">
        <Mail />
      </div>
      <div className="text-3xl font-bold mb-4">Password Reset</div>
      <div className="text-sm text-gray-500 mb-8">
        We send a code to email.com
      </div>

      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <Button className="w-full max-w-xs mt-6" onClick={gotoComplete}>
        Continue
      </Button>
      <Link href="/auth/sign-in">
        <div className="flex mt-6 cursor-pointer">
          <MoveLeft />
          <span className="ml-2">Back to log in</span>
        </div>
      </Link>
    </div>
  );
};

export default Page;