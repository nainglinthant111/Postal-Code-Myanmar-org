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

const formSchema = z
  .object({
    currentPassword: z.string().min(8, "Password must be at least 8 characters long"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

const page = () => {
  const router = useRouter();
  const backToMain = () => {
    router.push("/home-page");
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentPassword: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
    //router.push("/auth/sign-in")
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
              Update Password
            </div>
            <div className="w-full my-10">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="currentPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Password</FormLabel>
                        <FormControl>
                          <Input
                          type="password"
                            placeholder="Please Enter Current Password"
                            {...field}
                          />
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
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ConfirmPassword</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Please Enter Confirm Password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="my-4">
                    <Button className="mt-4 w-full" type="submit">
                      Update
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
