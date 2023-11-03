"use client";

import React, { useEffect, useState } from "react";
import { getCars } from "@/services/index";
import { CarList, Cars } from "@/types";
import ProductCard from "@/components/carsCards";

const Catalog = () => {
  const [CarList, SetCarList] = useState<CarList[]>([]);
  useEffect(() => {
    const fetchCarList = async () => {
      const res = await getCars();
      if (!res) return console.log("error");
      //@ts-ignore
      SetCarList(res.cars);
    };
    fetchCarList();
  }, []);
  return (
    <div>
      {CarList.length > 0 ? (
        <>
          <div className="main"> 
            <div className="catalog-top flex justify-between px-4 ">
            <div className="">
            <h1 className="text-3xl font-semibold">Catalog</h1>
            </div>
            <div className="flex space-x-4">
              <div>hi</div>
              <div>hi</div>
            </div>
            
            </div>
            <div>

            </div>
          </div>
          <div className="flex flex-wrap justify-evenly">
            {CarList.map((car) => (
              <>
              <ProductCard key={car.id} data={car} />
              </>
            ))}
             
          </div>
        </>
      ) : (
        <>
          <div>loading</div>
        </>
      )}
    </div>
  );
};

export default Catalog;
