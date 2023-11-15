"use client";

import React, { useEffect, useState } from "react";
import { getCars } from "@/services/index";
import { CarList, Cars } from "@/types";
import ProductCard from "@/components/carsCards";
import { Triangle } from "react-loader-spinner";

const Catalog = () => {
  const [CarList, SetCarList] = useState<CarList[]>([]);
  const [companyList, setCompanyList] = useState<String[]>([]);
  const [sortOrder, setSortOrder] = useState("minTOmax");
  const [company, setCompany] = useState("");
  useEffect(() => {
    const fetchCarList = async () => {
      const res = await getCars();
      if (!res) return console.log("error");
      //@ts-ignore
      let sortedList = res.cars;
      setCompanyList(sortedList.map((car: CarList) => car.company));
      if (sortOrder === "minTOmax") {
        sortedList = sortedList
          .slice()
          .sort((a: CarList, b: CarList) => a.price - b.price);
      } else if (sortOrder === "maxTomin") {
        sortedList = sortedList
          .slice()
          .sort((a: CarList, b: CarList) => b.price - a.price);
      }

      if (company) {
        sortedList = sortedList.filter(
          (car: CarList) => car.company === company
        );
      }

      SetCarList(sortedList);
    };
    fetchCarList();
  }, [sortOrder, company]);
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value);
  };

  return (
    <div>
      {CarList.length > 0 ? (
        <>
          <div className="main py-32">
            <div className="catalog-top flex justify-between px-4 ">
              <div className="">
                <h1 className="text-3xl font-semibold">Catalog</h1>
              </div>
              <div className="flex space-x-4">
                <select
                  onChange={handleSortChange}
                  value={sortOrder}
                  className="bg-gray-100 rounded-md px-2"
                >
                  <option value="minTOmax">Min to Max</option>
                  <option value="maxTomin">Max to Min</option>
                </select>
                <select
                  className="bg-gray-100 rounded-md px-2"
                  onChange={(e) => {
                    setCompany(e.target.value);
                  }}
                  placeholder="Choose a company.."
                >
                  <option value={""}>Company</option>
                  {companyList.map((company, i) => (
                    <>
                      <option key={i} value={`${company}`}>
                        {company}
                      </option>
                    </>
                  ))}
                </select>
              </div>
            </div>
            <div></div>
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
          <div className="w-screen h-40 flex-col-reverse flex items-center justify-center mt-10 space-x-2">
            <h2>Loading awesomeness <span className="animate-pulse">...</span></h2>
            <Triangle
              height="45"
              width="45"
              color="black"
              ariaLabel="triangle-loading"
              
              visible={true}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Catalog;
