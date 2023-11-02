"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { LeafyGreen, MoveDown } from "lucide-react";
import Image from "next/image";

const Herobody = () => {
  return (
    <>
      <div
        id="home"
        className="w-full mt-10 md:mt-0 md:h-[80vh] sm:h-[60vh] flex flex-col-reverse sm:flex-row space-y-10 md:space-y-0 "
      >
        <div className="sm:w-1/2 flex flex-col items-center justify-center space-y-1">
          <h3 className="md:text-5xl mt-10 sm:text-4xl text-3xl font-semibold">
            Dhrish Parekh👋
          </h3>
          <div className="flex items-center justify-center space-x-1 mb-10 md:mb-0 sm:mb-5 ">
            <h5 className="w-24 font-extralight h-0.5 bg-gray-400 "></h5>
            <h4 className="md:text-lg">Fullstack Developer</h4>
          </div>
          <div className="space-y-7">
            <p className="text-gray-500 dark:text-gray-300 font-light ">
              Turning vision into reality with coding{" "}
              <br className="md:hidden" /> and designing using{" "}
              <br className="hidden md:block" /> awesome technologies. I also
              write to <br /> document my life journey.
            </p>
            <Button className="hover:bg-secondary hover:border-primary hover:text-primary border duration-150 transition ease-out">
              <a href="#contact" className="flex items-center">
                <h3>Say hello</h3>
                <LeafyGreen className="ml-2 h-6 w-4" />
              </a>
            </Button>
          </div>
        </div>
        <div className="sm:w-1/2 md:h-[60vh] h-[30vh]  flex items-center justify-center mb-10 md:mb-0">
          <Image
            src={"/images/profile.jpg"}
            className="md:mt-20 image mb-6 md:mb-0"
            alt="PFP"
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className="flex items-center mt-20 md:mt-0  sm:mt-4   justify-center  space-x-2 ">
        <div>
            <input type="input" placeholder="Location" className="bg-muted p-3 placeholder:pl-1 rounded-l-xl"/> 
            <input type="date"   className="bg-muted p-3 rounded-r-lg text-secondary-foreground" />
        </div>
      </div>
    </>
  );
};

export default Herobody;
