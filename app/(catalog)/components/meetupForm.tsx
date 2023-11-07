"use client";
import { Button } from "@/components/ui/button";
import React, { FormEvent, useEffect, useState } from "react";
import { BookCar, getLocation } from "@/services";
import { RequestOptions } from "@/types";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import axios from "axios";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

type TimeZoneData = {
  TimeZoneId: string;
  GMT_offset: number;
  TimeZoneName: string;
  LocalTime_Now: string;
  Country: string;
  CountryId: string;
};

type FormDataType = {
  location: string;
  starttime: string;
  endtime: string;
  linkedin: string;
  resumeURL: string;
  contactNo: number;
  car_id: string;
};
const MeetupForm = ({ carid, id }: { carid: number; id: string }) => {
  const [Location, setLocation] = useState<TimeZoneData>(); // to get the reversed geolocation
  const [Mounted, setMounted] = useState(false); // for hydration error
  const [FormDate, SetFormDate] = useState<Date | undefined>(new Date()); // for date selection
  const [FormData, setFormData] = useState<FormDataType>({
    location: "",
    starttime: "",
    endtime: "",
    linkedin: "",
    resumeURL: "",
    contactNo: 0,
    car_id: id,
  });
  const router = useRouter();
  useEffect(() => {
    setMounted(true);
    const getcarLocation = async () => {
      const res: RequestOptions[] | undefined | null = await getLocation();
      if (typeof res === "undefined" || !res) return console.log("error");
      if (Location?.CountryId != "") {
        const locationres = await axios.request(res[carid]);
        if (!locationres) return toast.error("Error in fetching location");
        setLocation(locationres.data);
      }
    };
    getcarLocation();
  }, []);
  if (!Mounted) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await BookCar(
      FormData,
      FormDate ? FormDate.toISOString() : new Date().toISOString()
    );
    if (!res) return toast.error("Error in booking the car");
    toast.success("Car Booked Successfully");
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-1">
          <label htmlFor="name">Location</label>
          <select
            onChange={(e) =>
              setFormData({
                ...FormData,
                location: Location ? Location.CountryId : e.target.value,
              })
            }
            className="py-1 rounded-md bg-gray-200"
            placeholder="Select a place to pick up the car... "
            name={Location?.Country}
            id={Location?.CountryId}
          >
            <option value="">Select a place to pick up the car... </option>
            <option value={Location?.CountryId}>
              {Location?.TimeZoneName} , {Location?.Country}
            </option>
          </select>
        </div>
        <Popover>
          <PopoverTrigger className="flex flex-col  items-start">
            <label className="text-start font-semibold" htmlFor="">
              Choose a date for meetup
            </label>
            <div className="bg-gray-200 py-2 items-center flex justify-between rounded-lg text-start w-full px-2 font-">
              <h2>
                {FormDate
                  ? FormDate.toLocaleDateString()
                  : "Choose a place for meetup"}
              </h2>
              <CalendarIcon className="w-5 h-5" />
            </div>
          </PopoverTrigger>
          <PopoverContent className="relative left-24 bottom-2">
            <Calendar
              mode="single"
              selected={FormDate}
              onSelect={SetFormDate}
              className="rounded-md border shadow-md p-2 "
            />
          </PopoverContent>
        </Popover>
        <div className="flex flex-col space-y-1">
          <label htmlFor="email">Pickup timing</label>
          <div className="flex justify-between items-center px-2 ">
            <input
              type="time"
              name="pickup1"
              value={FormData.starttime}
              onChange={(e) =>
                setFormData({ ...FormData, starttime: e.target.value })
              }
              className="border border-gray-300 rounded-md py-2 px-4"
            />
            <span> TO </span>
            <input
              name="pickup2"
              type="time"
              value={FormData.endtime}
              onChange={(e) =>
                setFormData({ ...FormData, endtime: e.target.value })
              }
              className="border border-gray-300 rounded-md py-2 px-4"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="message">Credentials Link</label>
          <input
            value={FormData.linkedin}
            onChange={(e) =>
              setFormData({ ...FormData, linkedin: e.target.value })
            }
            placeholder="Linkedin..."
            type="text"
            name="linkedin"
            required
            className="border border-gray-300 rounded-md py-1 px-2"
          />
          <input
            value={FormData.resumeURL}
            onChange={(e) =>
              setFormData({ ...FormData, resumeURL: e.target.value })
            }
            placeholder="Resume Url..."
            type="text"
            required
            name="resumeURL"
            className="border border-gray-300 rounded-md py-1.5 px-2"
          />
          <input
            value={FormData.contactNo === 0 ? "" : FormData.contactNo}
            onChange={(e) =>
              setFormData({ ...FormData, contactNo: Number(e.target.value) })
            }
            placeholder="Contact No..."
            type="number"
            required
            name="resumeURL"
            className="border border-gray-300 rounded-md py-1.5 px-2"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <Button
            type="submit"
            className="bg-primary text-white hover:bg-secondary hover:text-primary"
          >
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export default MeetupForm;
