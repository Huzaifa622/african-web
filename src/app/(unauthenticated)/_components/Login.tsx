"use client";
import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LogIn, UserPlus } from "lucide-react";
import Link from "next/link";
import { api } from "@/lib/axiosInstance";
import toast from "react-hot-toast";
import getUser from "@/lib/auth";

const Login = () => {
  const [data, setData] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const [loader, setLoader] = useState(false);
  const handleLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoader(true);
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    await api
      .post("/login", formData)
      .then(async (res) => {
        toast.success(res.data.message);
        setData({ email: "", password: "" });
        window.localStorage.setItem("access_token", res.data.access_token);
        const response = await getUser();
        if (response) {
          window.location.reload();
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        console.log(err);
      });
    setLoader(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-center bg-[#FF0000] flex items-center p-3 rounded-sm gap-1 font-bold">
          <LogIn size={20} />
          Login
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[50%] bg-white">
        <DialogHeader>
          <DialogTitle>
            <div className="capitalize flex text-2xl  justify-between">
              <h1 className="font-bold">Login</h1>
              <div>
                <h4 className="text-sm text-gray-500">not registered?</h4>{" "}
                <DialogTrigger asChild>
                  <Link
                    className="text-[#FF0000] text-xs flex items-center gap-2"
                    href={"/register"}
                  >
                    <UserPlus size={15} />
                    Register Now
                  </Link>
                </DialogTrigger>
              </div>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-3">
          <label htmlFor="name" className="font-bold text-gray-500">
            Email/Username
          </label>
          <input
            id="email"
            value={data.email}
            onChange={(e) =>
              setData((prev) => ({ ...prev, email: e.target.value }))
            }
            placeholder="John Doe...."
            className="p-4 border outline-none focus:shadow-sm"
          />

          <label htmlFor="name" className="font-bold text-gray-500">
            Password
          </label>
          <input
            value={data.password}
            onChange={(e) =>
              setData((prev) => ({ ...prev, password: e.target.value }))
            }
            type="password"
            id="name"
            placeholder="Password..."
            className="p-4 border outline-none focus:shadow-sm"
          />
        </div>
        <DialogFooter>
          <button
            type="submit"
            onClick={handleLogin}
            disabled={loader ? true : false}
            className="w-full bg-[#FF0000] text-white p-4 rounded-sm"
          >
            {loader ? "Authenticating..." : "Login"}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
