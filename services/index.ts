import { CarList } from '@/types';
import request, { gql } from 'graphql-request';

export const getCars = async () => {    
    const query = gql `
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
    }
  }
  `

  const res:CarList[] = await request(process.env.NEXT_PUBLIC_GRAHPQL_ENDPOINT as string, query)
  console.log(res)
  return res

}