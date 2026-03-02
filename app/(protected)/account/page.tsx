"use client";

import Image from "next/image";

import image from "@/public/image.jpg";
import { UserT } from "@/app/types";
import { userStore } from "@/store/zustand";

export default function Account() {
  const userInfo: UserT | null = userStore((state) => state.user);
  if (!userInfo) {
    return null;
  }
  return (
    <div className=" h-full flex items-center justify-center">
      <div className="min-w-[35%] w-fit bg-foreground flex flex-col gap-4 p-8 rounded-2xl">
        <p className="header-font text-6xl text-center">Account</p>
        <div className="flex flex-col gap-4 px-8 py-2">
          <div className="grid grid-cols-[30%_70%] gap-4 items-center">
            <p className="text-[1rem]">Username: </p>
            <input
              type="text"
              className="bg-primary outline-none rounded-md p-2 w-full text-[1rem]"
              value={"Bipin Koirala"} //  Replace with actual username from user data
            />
          </div>
          <div className="grid grid-cols-[30%_70%] gap-4 items-center">
            <p className="text-[1rem]">Email: </p>
            <input
              type="text"
              className="bg-primary outline-none rounded-md p-2 w-full text-[1rem]"
              value={"bipin.123@gmail.com"} //  Replace with actual email from user data
            />
          </div>
          <div className="grid grid-cols-[30%_70%] gap-4 items-center">
            <p className="text-[1rem]">Email Verified: </p>
            <div className="flex gap-4">
              <p className="w-fit text-white rounded-md px-3 py-1 bg-red-500">
                False
              </p>
              <button className="bg-green-500 text-white rounded-md px-3 py-1 cursor-pointer hover:bg-green-600 smooth-transition">
                Verify Email
              </button>
            </div>
          </div>
          <div className="grid grid-cols-[30%_70%] gap-4 items-center">
            <p className="text-[1rem]">Role: </p>
            <p>User</p>
          </div>
          <div className="grid grid-cols-[30%_70%] gap-4 items-center">
            <p className="text-[1rem]">Profile Picture: </p>
            <Image
              src={image}
              alt="Profile Picture"
              width={100}
              className="rounded-full aspect-square object-cover"
            />
          </div>
          <div className="grid grid-cols-[30%_70%] gap-4 items-center">
            <p className="text-[1rem]">Last login: </p>
            <p>{new Date().toLocaleString()}</p>
          </div>
          <div className="grid grid-cols-[30%_70%] gap-4 items-center">
            <p className="text-[1rem]">Created At: </p>
            <p>{new Date().toLocaleString()}</p>
          </div>
          <div className="grid grid-cols-[30%_70%] gap-4 items-center">
            <p className="text-[1rem]">Updated At: </p>
            <p>{new Date().toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
