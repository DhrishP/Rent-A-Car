import { CarList } from '@/types'
import React from 'react'
import Image from 'next/image'
import Currency from '@/lib/currencyconv';
import { PiSteeringWheelBold } from 'react-icons/pi';
import { Car, FuelIcon } from 'lucide-react';
type ProductCardProps = {
    data: CarList;
  };
const CarCard = ({data}:ProductCardProps) => {
    const rentprice = (data.price * 0.01) / data.yearsUsed;
  return (
    <div className="flex flex-col  space-y-2">
    <div className="relative h-40">
      <Image
        src={data.image.url?data.image.url:data.cloudinaryUrl?data.cloudinaryUrl:""}
        alt=""
        layout="fill"
        objectFit="cover"
        className="rounded-t"
      />
    </div>
    <div className="flex flex-col space-y-2">
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
    </div>
  </div>

  )
}

export default CarCard