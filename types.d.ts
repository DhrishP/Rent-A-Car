export type CarList = {
    id: string;
    name: string;
    image: {
        url: string;
        size: number;
        width: number;
        height: number;
    }
    yearsUsed: number;
    company: string;
    price: number;
    model: string;
    fuelType: string;
    carType: string;
    createdAt: string;  
    mileage: number;
    description: string;

}