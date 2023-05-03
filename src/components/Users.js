import React from 'react';
import { gql , useQuery } from '@apollo/client';

const GET_USERS = gql `

     query{
          users{
               data{
                    name,
                    email,
                    phone,
               }
          }
     }
`


const Users = () => {

     const {loading , data , error} = useQuery(GET_USERS)
     console.log(loading , data , error)

     if(loading) return <h3>Loading ...</h3>
     if(error) return <h3>Someting went wrong </h3>

     return (
          <div>
              {data.users.data.map(item => (
                    <div key={item.id} style={{background : "silver" , margin : "15px"}}>
                         <h1>{item.name}</h1>
                         <p>{item.email}</p>
                         <p>{item.phone}</p>
                    </div>
              ))}
          </div>
     );
}

export default Users;
