import React from "react";
import { Button } from "@/components/ui/button";
import { Car, CarFront, LeafyGreen, MoveDown } from "lucide-react";
import Image from "next/image";
import { GrCatalog, GrCatalogOption } from "react-icons/gr";

const Herobody = () => {
  return (
    <>
      <div
        id="home"
        className="w-full mt-10 md:mt-0 md:h-[80vh] sm:h-[60vh] flex flex-col-reverse sm:flex-row space-y-10 md:space-y-0 "
      >
        <div className="sm:w-1/2 flex flex-col items-center justify-center space-y-1">
          <h3 className="md:text-5xl mt-10 sm:text-4xl text-3xl font-semibold">
            Rent-A-Car
          </h3>
          <div className="flex items-center justify-center space-x-1 mb-10 md:mb-0 sm:mb-5 "></div>
          <div className="space-y-7">
            <p className="text-gray-500 dark:text-gray-300 font-light ">
              Drive your adventure with us
              <br className="md:hidden" /> Easy rentals, diverse fleet. 
            <br />  Your journey, your way.
            </p>
            <Button className="hover:bg-secondary hover:border-primary hover:text-primary border duration-150 transition ease-out">
              <a href="#catalog" className="flex items-center  space-x-1">
                <h3>Catalog</h3>
                <span className="text-lg text "><CarFront /></span>
              </a>
            </Button>
          </div>
        </div>
        <div className="sm:w-1/2 md:h-[60vh] h-[30vh]  flex items-center justify-center mb-10 md:mb-0">
          <Image
            src={"/carlanding.png"}
            className="md:mt-20 image mb-6 md:mb-0"
            alt="PFP"
            width={500}
            height={400}
          />
        </div>
      </div>
      <div className="flex items-center mt-20 md:mt-0  sm:mt-4   justify-center  space-x-2 ">
        <div>
          <input
            type="input"
            placeholder="Location"
            className="bg-muted p-3 placeholder:pl-1 rounded-l-xl"
          />
          <input
            type="date"
            className="bg-muted p-3 rounded-r-lg text-secondary-foreground"
          />
        </div>
      </div>
    </>
  );
};

export default Herobody;
