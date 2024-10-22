// "use client";
// import { useRouter } from "next/navigation";
// import React, { useState } from "react";
// import { Input } from "@/components/ui/input";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";

// const page = () => {
//   const router = useRouter();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const onSubmit = (e: { preventDefault: () => void }) => {
//     e.preventDefault();
//     const registerData = {
//       name: name,
//       email: email,
//       password: password,
//     };
//     console.log(registerData);
//   };

//   return (
//     <div className="min-h-screen">
//       <div className="flex justify-center items-center min-h-screen mx-6 md:mx-32">
//         <div className="rounded-lg shadow-lg w-full md:mx-52">
//           <div className="md:px-20 px-4">
//             <div className="flex flex-col justify-center items-center">
//               <div className="md:text-3xl text-2xl font-bold bg-gradient-to-r from-yellow-400 via-green-600 to-red-600 bg-clip-text text-transparent">
//                 MyanmarPostalCode
//               </div>
//               <div className="md:text-2xl text-lg text-gray-500 font-bold mt-4">
//                 Create your account
//               </div>
//             </div>

//             <div className="w-full mt-4">
//               <form className="flex flex-col" onSubmit={onSubmit}>
//                 <div>
//                   Name
//                   <span className="text-sm ml-1 text-red-500">(Required)</span>
//                 </div>
//                 <Input
//                   type="name"
//                   placeholder="username"
//                   className="mt-2 border md:py-1 md:px-3 rounded-sm"
//                   onChange={(e) => setName(e.target.value)}
//                 />
//                 <div className="mt-4">
//                   Email
//                   <span className="text-sm ml-1 text-red-500">(Required)</span>
//                 </div>
//                 <Input
//                   type="email"
//                   placeholder="Email"
//                   className="mt-2 border md:py-1 md:px-3 rounded-sm"
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <div className="mt-4">
//                   Password
//                   <span className="text-sm ml-1 text-red-500">(Required)</span>
//                 </div>
//                 <Input
//                   type="password"
//                   placeholder="Password"
//                   className="mt-2 border md:py-1 md:px-3 rounded-sm"
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <div className="mt-4">Confirm Password</div>
//                 <Input
//                   type="password"
//                   placeholder="Password"
//                   className="mt-2 border md:py-1 md:px-3 rounded-sm"
//                   //onChange={(e) => setConfirmPassword(e.target.value)}
//                 />
//                 <Button className="md:my-10 my-6">Register</Button>
//                 <div className="flex justify-center items-center md:my-10 my-4">
//                   Already have an account?
//                   <Link href="/auth/sign-in">
//                     <span className="underline text-blue-400 cursor-pointer ml-1">
//                       Login
//                     </span>
//                   </Link>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;

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
import { data } from "../../../../Constants";

const formSchema = z
  .object({
    name: z.string().min(4, "Username must be at least 4 characters long"),
    email: z.string().email({ message: "Please Enter Valid Email" }),
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
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
    router.push("/auth/sign-in")
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
            <div className="w-full my-4">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Please Enter Username"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
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
                  <div className="mt-4">
                    <Button className="mt-4 w-full" type="submit">
                      Register
                    </Button>
                  </div>
                </form>
              </Form>
              <div className="flex justify-center items-center md:mt-6 mt-4">
                Already have an account?
                <Link href="/auth/sign-in">
                  <span className="underline text-blue-400 cursor-pointer ml-1">
                    Login
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
