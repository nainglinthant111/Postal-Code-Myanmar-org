"use client";
import React, { useEffect, useState } from "react";
import { MoveLeft, Copy, Trash2 } from "lucide-react";
import Check from "../../../public/check.png";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const page = () => {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const [hasKey, setHasKey] = useState(false);
  const [apikey, setApiKey] = useState(false);
  const backToMain = () => {
    router.push("/home-page");
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("Hello");
      setCopied(true);
    } catch (error) {
    } finally {
      setTimeout(() => setCopied(false), 5000);
    }
  };
  
  const gotoUpdatePassword = () =>{
    router.push('/auth/update-password')
  }
  const handleGenerateKey = () =>{
    setHasKey(true)
    setApiKey(true)
  }

  const handleDeleteKey = () =>{
    setHasKey(false)
    setApiKey(false)
  }

  useEffect(() => {
    router.prefetch("/home-page");
    router.prefetch('/auth/update-password')
  }, [router]);

  return (
    <div className="sm:pt-12 sm:px-40 pt-4 sm:pb-7 px-6 text-justify min-h-screen">
      <div onClick={backToMain} className="cursor-pointer">
        <MoveLeft />
      </div>
      <div className="sm:mx-60">
        <div className="sm:pt-12 pt-6 text-2xl font-bold tracking-tight">
          User Infomation
        </div>
        <div className="pt-10">
          <div className="text-lg font-bold">Name</div>
          <div className="mt-2 text-sm text-gray-500">
            <Input id="name" value="Min Thant Maung" readOnly />
          </div>
        </div>
        <div className="pt-4">
          <div className="text-lg font-bold">Email</div>
          <div className="mt-2 text-sm text-gray-500">
            <Input id="email" value="Minthantmaung@gicjp.com" readOnly />
          </div>
        </div>
        <div className="pt-4">
          <div className="text-lg font-bold">Password</div>
          <div className="mt-2" onClick={gotoUpdatePassword}>
            <Button>Update Password</Button>
          </div>
        </div>
        <div className="pt-4">
          <div className="text-lg font-bold">Api Key</div>
          <div className="mt-2">
            <Button
              variant="outline"
              disabled={hasKey}
              onClick={handleGenerateKey}
            >
              Generate Key
            </Button>
          </div>
          {apikey ? (
            <>
              <div className="mt-4 flex justify-between">
                <div>This is key</div>
                <div className="flex">
                  <div className="mr-4 cursor-pointer" onClick={handleDeleteKey}>
                    <Trash2 width={20} height={20} />
                  </div>
                  {copied ? (
                    <>
                      <Image
                        src={Check}
                        alt="checked"
                        className="w-5 h-5 mr-1 sm:mr-0"
                      />
                    </>
                  ) : (
                    <div className="cursor-pointer" onClick={handleCopy}>
                      <Copy width={20} height={20} />
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="pt-4">
          <div className="text-lg font-bold">Subscription</div>
          <div className="mt-2 text-sm text-gray-500">Free Plan</div>
        </div>
      </div>
    </div>
  );
};

export default page;
