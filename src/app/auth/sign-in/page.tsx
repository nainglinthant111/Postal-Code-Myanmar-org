"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const backToMain = () => {
    router.push("/home-page");
  };
  return (
    <div className="min-h-screen">
      <div className="flex justify-center items-center min-h-screen mx-32">
        <div className="rounded-lg shadow-lg w-full md:mx-56">
          <div onClick={backToMain} className="cursor-pointer mt-4 ml-4">
            <MoveLeft />
          </div>
          <div className="md:px-20">
            <div className="flex flex-col justify-center items-center">
              <div className="md:text-3xl font-bold bg-gradient-to-r from-yellow-400 via-green-600 to-red-600 bg-clip-text text-transparent">
                MyanmarPostalCode
              </div>
              <div className="text-2xl text-gray-500 font-bold md:mt-4">
                Sign in to your account
              </div>
            </div>

            <div className="w-full md:mt-4">
              <form className="flex flex-col">
                <div>Email</div>
                <Input
                  type="email"
                  placeholder="Email"
                  className="md:mt-2 border md:py-1 md:px-3 rounded-sm"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="md:mt-4">Password</div>
                <Input
                  type="password"
                  placeholder="Password"
                  className="md:mt-2 border md:py-1 md:px-3 rounded-sm"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Link href="/auth/forget-password">
                  <div className="underline flex justify-end text-blue-400 cursor-pointer md:mt-2">
                    Forget password?
                  </div>
                </Link>
                <Button className="md:my-10">Login</Button>
                <div className="flex justify-center items-center md:my-10">
                  Don&apos;t have an account?Register
                  <Link href="/auth/sign-up">
                    <span className="underline text-blue-400 cursor-pointer md:ml-1">
                      here
                    </span>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
