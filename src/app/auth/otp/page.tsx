"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Mail, MoveLeft } from "lucide-react";
import Link from "next/link";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

const otp = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });
  const router = useRouter();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    router.push("/auth/complete");
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="border rounded-xl p-6 mb-4">
        <Mail />
      </div>
      <div className="text-3xl font-bold mb-4">Password Reset</div>
      <div className="text-sm text-gray-500 mb-8">
        We send a Otp-code to email.com
      </div>
      <div className="flex justify-center items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <FormField
            control={form.control}
            name="pin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>One-Time Password</FormLabel>
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
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
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full max-w-xs mt-6">
            Continue
          </Button>
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
  );
};

export default otp;
