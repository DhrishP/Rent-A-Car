import { CarList, LocationCar, RequestOptions } from "@/types";
import request, { gql } from "graphql-request";
type locationresprops = {
  cars: LocationCar[];
};
export const getCars = async () => {
  const query = gql`
    query CarList {
      cars {
        id
        name
        image {
          url
        }
        carType
        createdAt
        model
        company
        price
        fuelType
        mileage
        yearsUsed
        description
        carId
      }
    }
  `;

  const res: CarList[] = await request(
    process.env.NEXT_PUBLIC_GRAHPQL_ENDPOINT as string,
    query
  );
  console.log(res);
  return res;
};

export const getLocation = async () => {
  try {
    const query = gql`
      query CarLocatiom {
        cars {
          location {
            latitude
            longitude
          }
        }
      }
    `;
    const res: locationresprops = await request(
      process.env.NEXT_PUBLIC_GRAHPQL_ENDPOINT as string,
      query
    );
    if (!res) return null;

    const LocArrOptions: RequestOptions[] = res.cars.map((car) => {
      const options = {
        method: "GET",
        url: "https://geocodeapi.p.rapidapi.com/GetTimezone",
        params: {
          latitude: `${car.location.latitude}`,
          longitude: `${car.location.longitude}`,
        },
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY as string,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST as string,
        },
      };
      return options;
    });

    return LocArrOptions;
  } catch (err) {
    console.log(err);
  }
};
