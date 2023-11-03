import request, { gql } from 'graphql-request';

export const getCars = async () => {    
    const query = gql `
    query CarList {
      cars {
        model 
        id
      }
    }
  `

  const res = await request(process.env.NEXT_PUBLIC_GRAHPQL_ENDPOINT as string, query)
  console.log(res)
  return res

}