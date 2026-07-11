"use client";
import Link from "next/link";
import {
  Button,
  Card,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";

const LoginPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    console.log(user);
    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });
    console.log(data, error, "sign in data");
    if (data) {
      toast.success("login successfull");
      redirect("/");
    }

    if (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="mt-20">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-[#0C0B0B]">Login</h1>
        <p className="text-gray-500">Start your adventure with Wanderlust</p>
      </div>
      <div className=" flex items-center justify-center p-5">
        <Card className="w-full max-w-lg p-6 rounded-none">
          <Form className="space-y-4" onSubmit={onSubmit}>
            {/* Email */}
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email";
                }
                return null;
              }}
            >
              <Label>Email Address</Label>
              <Input placeholder="Enter your email" />
              <FieldError />
            </TextField>

            {/* Password */}
            <TextField
              isRequired
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "Minimum 8 characters";
                }
                return null;
              }}
            >
              <Label>Password</Label>
              <Input placeholder="Create a password" />
              <FieldError />
            </TextField>
            <Button type="submit" color="primary" className="w-full">
              Login
            </Button>
          </Form>
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>

            <div className="relative flex justify-center">
              <span className="bg-white px-3 text-sm text-gray-500">
                Or sign In with
              </span>
            </div>
          </div>
          <Button onClick={handleGoogleSignIn} variant="outline" className="w-full rounded-none">
            <FcGoogle size={20} />
            Sign In With Google
          </Button>
          <p className="text-center text-sm mt-5">
            Dose not have an account?{" "}
            <Link
              href="/signup"
              className="text-primary font-semibold text-[#15A1BF]"
            >
              Sign Up
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
