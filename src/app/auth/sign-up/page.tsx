"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { MoveLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const page = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen">
      <div className="flex justify-center items-center min-h-screen mx-32">
        <div className="rounded-lg shadow-lg w-full md:mx-44">
          <div className="md:px-20">
            <div className="flex flex-col justify-center items-center">
              <div className="md:text-3xl font-bold bg-gradient-to-r from-yellow-400 via-green-600 to-red-600 bg-clip-text text-transparent">
                MyanmarPostalCode
              </div>
              <div className="text-2xl text-gray-500 font-bold md:mt-4">
                Create your account
              </div>
            </div>

            <div className="w-full md:mt-4">
              <form className="flex flex-col">
                <div>
                  Name<span className="text-sm ml-1 text-red-500">(Required)</span>
                </div>
                <Input
                  type="name"
                  placeholder="username"
                  className="md:mt-2 border md:py-1 md:px-3 rounded-sm"
                  //onChange={(e) => setName(e.target.value)}
                />
                <div className="md:mt-4">
                  Email<span className="text-sm ml-1 text-red-500">(Required)</span>
                </div>
                <Input
                  type="email"
                  placeholder="Email"
                  className="md:mt-2 border md:py-1 md:px-3 rounded-sm"
                  //onChange={(e) => setEmail(e.target.value)}
                />
                <div className="md:mt-4">
                  Password<span className="text-sm ml-1 text-red-500">(Required)</span>
                </div>
                <Input
                  type="password"
                  placeholder="Password"
                  className="md:mt-2 border md:py-1 md:px-3 rounded-sm"
                  //onChange={(e) => setPassword(e.target.value)}
                />
                <div className="md:mt-4">Confirm Password</div>
                <Input
                  type="password"
                  placeholder="Password"
                  className="md:mt-2 border md:py-1 md:px-3 rounded-sm"
                  //onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Button className="md:my-10">Register</Button>
                <div className="flex justify-center items-center md:my-10">
                  Already have an account?
                  <Link href="/auth/sign-in">
                    <span className="underline text-blue-400 cursor-pointer md:ml-1">
                      Login
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
