export type CarList = {
    id: string;
    name: string;
    image: {
      url: string?;
    };
    yearsUsed: number;
    company: string;
    price: number;
    model: string;
    fuelType: string;
    carType: string;
    createdAt: string;
    mileage: number;
    description: string?;
    carId: number;
    cloudinaryUrl: string?;
  };
  
  export type Cars = {
    cars: CarList[];
  };


  export type LocationCar = {
    location:{
      latitude: number,
      longitude: number
    }

  }

  export type RequestOptions = {
    method: string;
    url: string;
    params: {
      latitude: string;
      longitude: string;
    };
    headers: {
      "X-RapidAPI-Key": string;
      "X-RapidAPI-Host": string;
    };
  };
