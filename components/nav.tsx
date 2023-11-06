"use client";
import { UserButton } from "@clerk/nextjs";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const Nav = () => {
  const menu = "/menu.svg";
  const cross = "/public/cross.svg";
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle(!toggle);
  return (
    <div className="flex justify-between pt-0 items-center w-full mt-5 sticky top-0 z-20  ">
      <Link
        href={"/"}
        className="inline-flex items-center pl-9 gap-[14px] relative"
      >
        {" "}
        <Image
          className="relative w-[30px] h-[30px]"
          alt="Group"
          src="/logo.svg"
          width={50}
          height={50}
        />
        <div className="relative w-fit [font-family:'Inter-Bold',Helvetica] hidden lg:flex font-bold text-white text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
          LingoSafari
        </div>
      </Link>
      <div className="pr-5 hidden lg:flex gap-5 items-center">
        <div className="px-1 text-md">
          <a href="/" className="px-4 hover:underline transition-colors">
            Home
          </a>
          <a href="/carform" className="px-4 hover:underline transition-colors">
            About
          </a>
          <a href="#" className="px-4 hover:underline transition-colors">
            Contact
          </a>
        </div>
        <div className="flex items-center space-x-5">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
      <div className="lg:hidden z-40 m-4" onClick={handleClick}>
        <div>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
      <div className="lg:hidden z-40" onClick={handleClick}>
        <Image
          src={menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain mr-5 cursor-pointer"
          width={50}
          height={50}
        />
      </div>
      <ul
        className={
          toggle
            ? "pt-24 pb-8 absolute top-0 bg-black shadow-sm z-20 w-full px-8 lg:hidden flex flex-col items-center gap-5"
            : "hidden"
        }
      >
        <li>
          <a href="#" className=" hover:underline transition-colors">Home</a>
        </li>
        <li>
          <a href="# hover:underline transition-colors">About</a>
        </li>
        <li>
          <a className="hover:underline transition-colors" href="#">Contact us</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
