import { CarList } from "@/types";
import React from "react";

const CarCards = (data: CarList[]) => {
  return <div>{data.length > 0 ? <>

    
  </> : <>
  
  </>}</div>;
};

export default CarCards;
