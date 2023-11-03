export type CarList = {
    id: string;
    name: string;
    image: {
      url: string;
    };
    yearsUsed: number;
    company: string;
    price: number;
    model: string;
    fuelType: string;
    carType: string;
    createdAt: string;
    mileage: number;
    description: string;
  };
  
  export type Cars = {
    cars: CarList[];
  };