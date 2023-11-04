"use client";
import Image from "next/image";

import Currency from "@/lib/currencyconv";
import { CarList } from "@/types";
import { GrManual } from "react-icons/gr";
import { PiSteeringWheelBold } from "react-icons/pi";
import { GiElectric } from "react-icons/gi";
import { FaGasPump } from "react-icons/fa";
import { Car, FuelIcon, MoveRightIcon } from "lucide-react";
import { Button } from "./ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CarCard from "@/app/(catalog)/components/carCard";
import MeetupForm from "@/app/(catalog)/components/meetupForm";

type ProductCardProps = {
  data: CarList;
};

const ProductCard = ({ data }: ProductCardProps) => {
  const rentprice = (data.price * 0.01) / data.yearsUsed;
  return (
    <>
      <Dialog>
        <div className="max-w-xs rounded overflow-hidden shadow-md">
          <div className="relative h-40">
            <Image
              src={data.image.url}
              alt=""
              layout="fill"
              objectFit="cover"
              className="rounded-t"
            />
          </div>
          <div className="p-4 flex flex-col space-y-2">
            <p className="font-semibold text-lg">{data.name}</p>
            <p className="text-sm text-gray-500 font-sans h-14">
              {data.description}
            </p>
            <div className="flex items-center space-x-2 mt-2">
              <Currency value={rentprice} />
              <span className="text-gray-300">per/mo</span>
            </div>
            <div className="flex justify-between mt-5 items-center">
              <div>
                <div className="flex flex-col items-center justify-center ">
                  <span className="text-2xl">
                    <PiSteeringWheelBold />
                  </span>
                  {data.carType}
                </div>
              </div>
              <div>
                <div className="flex flex-col items-center justify-center ">
                  {" "}
                  <FuelIcon className="w-6 h-6" />
                  {data.fuelType}
                </div>
              </div>
              <div>
                <div className="flex items-center justify-center flex-col">
                  <Car className="w-6 h-6" />
                  {data.mileage} cpr
                </div>
              </div>
            </div>

            <DialogTrigger>
              {" "}
              <Button
                variant={"secondary"}
                className="flex hover:bg-pink-400  items-center"
              >
                Book your ride now <MoveRightIcon className="w-4 ml-1 " />
              </Button>
            </DialogTrigger>
            <DialogContent className="h-[85vh] max-w-screen-lg">
              <DialogHeader>
                <DialogTitle>Book your ride</DialogTitle>
                <DialogDescription>Car details</DialogDescription>
              </DialogHeader>
              <div className="flex justify-between space-x-10">
                <div className="w-1/3 h-full">
                  <CarCard data={data} />
                </div>
                <div className="w-1/2">
                  <DialogHeader className="flex items-start">
                    <DialogTitle>Contact Form</DialogTitle>
                    <DialogDescription>
                      Details to send to the owner
                    </DialogDescription>
                  </DialogHeader>
                  <MeetupForm carid={data.carId} />
                </div>
              </div>
            </DialogContent>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ProductCard;
