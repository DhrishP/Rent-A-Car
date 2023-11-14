import prisma from "@/prisma/client";
import { auth } from "@clerk/nextjs";
import request, { gql } from "graphql-request";


export  async function POST(req: Request) {
  const  data  = await req.json();
  if(!data.Carnamee ) return Response.json({message: "Please fill all the fields"}, {status: 400})
  const { userId } = auth();
  if (!userId)
    return Response.json({ message: "No user found" }, { status: 401 });
  try {
   
    const mutationQuery = gql`
    mutation MyMutation {
    createCar(
      data: {
        name: "${data.Carnamee}",
        company: "${data.company}",
        carType: ${data.carType},
        model: "${data.Model}",
        yearsUsed: ${data.yearsUsed},
        price: ${data.price},
        mileage: ${data.mileage},
        location: {latitude: ${data.location.latitude}, longitude: ${data.location.longitude}}, 
        fuelType: ${data.fuelType},
        cloudinaryUrl: "${data.Imageurl}"
      }
    ){
      id
    }
  }
    `;
    const res: string = await request(
      process.env.NEXT_PUBLIC_GRAHPQL_ENDPOINT as string,
      mutationQuery
    );
    if (!res || !userId) return Response.json({ message: "Something went wrong" } , { status: 400 });
    await prisma.userCar.create({
      data: {
        userid: userId,
        isPosted: true,
        isVerified: false,
      },
    });
    await prisma.car.create({
      data: {
        Carnamee: data.Carnamee,
        company: data.company,
        carType: data.carType,
        Model: data.Model,
        yearsUsed: data.yearsUsed,
        price: data.price,
        mileage: data.mileage,
        description: data.description,
        fuelType: data.fuelType,
        Imageurl: data.Imageurl,
        user_id: userId,
      },
    });
    return Response.json(res);
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Something went wrong" }, { status: 400 });
    
  }
}
