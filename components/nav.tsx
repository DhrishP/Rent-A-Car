"use client";
import { UserButton } from "@clerk/nextjs";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
const Nav = () => {
  const menu = "/menu.svg";
  const cross = "/public/cross.svg";
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle(!toggle);
  const navelements = [
    { name: "Home", url: "/" },
    { name: "Add Car", url: "/carform" },
  ];
  const path = usePathname();

  return (
    <div className="flex h-[8vh] justify-between items-center md:items-start w-full mt-5 sticky top-0   ">
      <Link
        href={"/"}
        className=" inline-flex md:flex items-center md:gap-[0px] gap-[14px]     relative  "
      >
        {" "}
        <Image
          className=" md:h-44 h-36 w-36 md:w-44 md:bottom-12 bottom-0 relative"
          alt="Group"
          src="/log.png"
          width={100}
          height={100}
        />
  
      </Link>
      <div className="pr-5  hidden lg:flex gap-5 items-center">
        <div className="px-1 text-md flex items-center justify-center">
          {navelements.map((element) => (
            <Link className={`px-4 `} key={element.url} href={element.url}>
              {element.name}
              {path === element.url && (
                <motion.span
                  layoutId="underline"
                  className="relative left-0  block h-[1px] w-full  bg-primary"
                />
              )}
            </Link>
          ))}
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
          <a href="#" className=" hover:underline transition-colors">
            Home
          </a>
        </li>
        <li>
          <a href="# hover:underline transition-colors">About</a>
        </li>
        <li>
          <a className="hover:underline transition-colors" href="#">
            Contact us
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
