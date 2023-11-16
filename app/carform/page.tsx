"use client";
import { AccountForm } from "@/components/ui/account-form";
import { AddressForm } from "@/components/ui/details-form";
import { UserForm } from "@/components/ui/user-form";
import { useMultistepForm } from "@/hooks/use-multistep-form";
import React, { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { AlertModal } from "@/components/ui/alert-modal";
import axios from "axios";
import { getLoc } from "@/utils/get-loc";
import { InfinitySpin } from "react-loader-spinner";

export type FormData = {
  Carnamee: string;
  description: string;
  company: string;
  carType: string;
  fuelType: string;
  yearsUsed: number;
  price: number;
  mileage: number;
  Imageurl: string;
  Model: string;
  location: {
    latitude: number;
    longitude: number;
  };
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
  Imageurl: "",
  Model: "",
  location: {
    latitude: 0,
    longitude: 0,
  },
};
const CarPage = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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

  async function onSubmit(e: FormEvent) {
    try {
      e.preventDefault();
      setLoading(true);
      const location = await getLoc();
      setData({
        ...data,
        location: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        },
      });
      const res: string | undefined | null = await axios.post(
        "/api/createcar",
        data
      );
      if (!res) return toast.error("Error in creating car");
      toast.success("Car created successfully");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
      setIsOpen(false);
    }
  }
  const onClose = () => {
    setIsOpen(false);
  };
  if (loading)
    return (
      <div className="flex flex-col  w-screen h-[75vh] items-center justify-center  ">
        <h2>Submitting</h2>
        <InfinitySpin  width="180" color="black" />
      </div>
    );

  return (
    <>
      <AlertModal
        isOpen={isOpen}
        loading={loading}
        onClose={onClose}
        onConfirm={onSubmit}
      />
      <div className="h-[89.3vh] w-[100vw] bg-[url(https://i.pinimg.com/564x/81/29/c4/8129c47eea4ca2923d834a0daf316d72.jpg)] flex items-center justify-center">
        <div className=" bg-secondary border border-black p-8 m-4 rounded-md font-sans max-w-max">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!isLastStep) return next();
              setIsOpen(true);
            }}
          >
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
    </>
  );
};

export default CarPage;
