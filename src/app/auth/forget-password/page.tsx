"use client";
import React from "react";
import { Loader, MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
  email: z.string().email({ message: "Invalid Email Address" }),
});

const Page = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });
  const router = useRouter();

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
    router.push("/auth/otp");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen mx-6 md:mx-32">
      <div className="flex flex-col justify-center items-center">
        <div className="border rounded-xl p-6 mb-4">
          <Loader />
        </div>
        <div className="text-3xl font-bold mb-4">Forget Password?</div>
        <div className="text-sm text-gray-500 mb-8">
          No worries, we'll send you reset instructions.
        </div>
        <div className="w-full">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-6"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>  
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Please Enter Email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full max-w-xs mt-6">Continue</Button>
            </form>
          </Form>
        </div>
        <Link href="/auth/sign-in">
          <div className="flex mt-6 cursor-pointer">
            <MoveLeft />
            <span className="ml-2">Back to log in</span>
          </div>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Page;
