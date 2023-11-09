"use client";
import { AccountForm } from "@/components/ui/account-form";
import { AddressForm } from "@/components/ui/address-form";
import { UserForm } from "@/components/ui/user-form";
import { useMultistepForm } from "@/hooks/use-multistep-form";
import React, { FormEvent, useState } from "react";
type FormData = {
  Carnamee: string;
  description: string;
  company: string;
  carType: string;
  fuelType: string;
  yearsUsed: number;
  price: number;
  mileage: number;
  email: string;
  password: string;
};

const INITIAL_DATA: FormData = {
  Carnamee: "",
  description: "",
  company: "",
  carType: "",
  fuelType: "",
  yearsUsed: 0,
  price: 0,
  mileage: 0,
  email: "",
  password: "",
};
const CarPage = () => {
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <UserForm key={data.Carnamee} {...data} updateFields={updateFields} />,
      <AddressForm key={data.company} {...data} updateFields={updateFields} />,
      <AccountForm
        key={data.description}
        {...data}
        updateFields={updateFields}
      />,
    ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    console.log(data);
    alert("Successful Account Creation");
  }

  return (
    <div className="h-[89.3vh] w-[100vw] bg-[url(https://i.pinimg.com/564x/81/29/c4/8129c47eea4ca2923d834a0daf316d72.jpg)] flex items-center justify-center">
      <div className=" bg-secondary border border-black p-8 m-4 rounded-md font-sans max-w-max">
        <form onSubmit={onSubmit}>
          <div className="relative bottom-1">
            {currentStepIndex + 1} / {steps.length}
          </div>
          {step}
          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              gap: ".5rem",
              justifyContent: "flex-end",
            }}
          >
            {!isFirstStep && (
              <button type="button" onClick={back}>
                Back
              </button>
            )}
            <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CarPage;
