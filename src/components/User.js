import React , {useState} from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../graphql/queres';


const User = () => {

     const [id , setId] = useState(2);

     const changeHandler = (event) => {
          setId(event.target.value)
     }

     const {loading , data , error} = useQuery(GET_USER , {

          variables : {id : id}

     })

     console.log({loading , data , error})

     return (

          <div>

               <input value={id} onChange={changeHandler} placeholder="Enter Id"/>

               <div style={{background : "silver" , margin : "15px"}}>
                    {data 
                         && 
                    <>
                         <h1>{data.user.name}</h1>
                         <p>{data.user.email}</p>
                         <p>{data.user.phone}</p>
                    </>
                    }
                    
               </div>
            
          </div>

     );
}

export default User;
