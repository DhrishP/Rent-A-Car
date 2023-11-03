"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { getCars } from "@/services/index";
import { CarList } from "@/types";
import CarCards from "@/components/carsCards";

const Catalog = () => {
  const [CarList, SetCarList] = useState<CarList[]>([]);
  useEffect(() => {
    const fetchCarList = async () => {
      getCars();
      //   const res: CarList[] = await getCars() ;
      //   if (!res) return console.log("error");
      //   SetCarList(res);
      //   console.log(res);
    };
    fetchCarList();
  }, []);
  return (
    <div>
      <CarCards {...CarList} />
    </div>
  );
};

export default Catalog;
