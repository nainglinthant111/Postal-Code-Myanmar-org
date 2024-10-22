"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email({ message: "Please Enter Valid Email" }),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

const page = () => {
  const router = useRouter();
  const backToMain = () => {
    router.push("/home-page");
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }
  return (
    <div className="flex justify-center items-center min-h-screen mx-6 md:mx-32">
      <div className="rounded-lg shadow-lg w-full md:mx-56">
        <div onClick={backToMain} className="cursor-pointer mt-4 ml-4">
          <MoveLeft />
        </div>
        <div className="md:px-20 px-4 mt-4 md:mt-0">
          <div className="flex flex-col justify-center items-center">
            <div className="md:text-3xl text-2xl font-bold bg-gradient-to-r from-yellow-400 via-green-600 to-red-600 bg-clip-text text-transparent">
              MyanmarPostalCode
            </div>
            <div className="md:text-2xl text-lg text-gray-500 font-bold mt-4">
              Sign in to your account
            </div>
            <div className="w-full my-10">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Please Enter Email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>  
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Please Enter Password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Link href="/auth/forget-password">
                    <div className="underline flex justify-end text-blue-400 cursor-pointer mt-2">
                      Forget password?
                    </div>
                  </Link>
                  <Button className="my-10 w-full" type="submit">
                    Login
                  </Button>
                </form>
              </Form>
              <div className="flex justify-center items-center md:my-10 my-6">
                Don&apos;t have an account?Register
                <Link href="/auth/sign-up">
                  <span className="underline text-blue-400 cursor-pointer ml-1">
                    here
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
