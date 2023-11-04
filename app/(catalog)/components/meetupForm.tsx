"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { getLocation } from "@/services";
import { RequestOptions } from "@/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
type TimeZoneData = {
  TimeZoneId: string;
  GMT_offset: number;
  TimeZoneName: string;
  LocalTime_Now: string;
  Country: string;
  CountryId: string;
};
const MeetupForm = ({ carid }: { carid: number }) => {
  const [Location, setLocation] = useState<TimeZoneData>(); // to get the reversed geolocation
  const [Mounted, setMounted] = useState(false);  // for hydration error
  const [Selectedloc, setSelectedloc] = useState<string>(""); // for the select
  useEffect(() => {
    setMounted(true);
    const getcarLocation = async () => {
    // //   const res: RequestOptions[] | undefined | null = await getLocation();
    //   if (typeof res === "undefined" || !res) return console.log("error");
    //   console.log(res[carid]);
    //   const locationres = await axios.request(res[carid]);
    //   if (!locationres) return console.log("error");
    //   setLocation(locationres.data);
    
    };
    getcarLocation();
  }, []);
  if (!Mounted) return null;

  return (
    <form>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-1">
          <label htmlFor="name">Location</label>
            <select placeholder="Select a place to pick up the car... " defaultValue={'Select a location'}  name={Location?.Country} id={Location?.CountryId}>
                <option value="">{Location?.TimeZoneName} , {Location?.Country}</option>
            </select>
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="email">Pickup timing</label>
          <div className="flex justify-between items-center px-2 ">
          <input
            type="time"
            name="pickup1"
            className="border border-gray-300 rounded-md py-2 px-4"
          />
          <span> TO </span>
          <input name="pickup2" type="time" className="border border-gray-300 rounded-md py-2 px-4"/>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="message">Credentials Link</label>
         <input placeholder="Linkedin..." type="text" name="linkedin" className="border border-gray-300 rounded-md py-1 px-2"/>
         <input placeholder="Resume Url..." type="text" name="resumeURL" className="border border-gray-300 rounded-md py-1.5 px-2"/>

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
