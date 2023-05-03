import React , {useState} from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_USER } from '../graphql/queres';


const UserOnClick = () => {

     const [id , setId] = useState(2);

     const changeHandler = (event) => {
          setId(event.target.value)
     }

     const [getUser,{loading , data , error , called}] = useLazyQuery(GET_USER , {

          variables : {id : id}

     })

     console.log({loading , data , error , called})

     // if(loading) return <h3>Loading ...</h3>
     // if(error) return <h3>Someting went wrong </h3>

     return (

          <div>

               <input value={id} onChange={changeHandler} placeholder="Enter Id"/>
               <button onClick={()=> getUser()}>Get User</button>

               <div style={{background : "silver" , margin : "15px"}}>
                    {loading && <h3>Loading ...</h3>}
                    {error && <h3>Someting went wrong </h3>}

                    {data  && 
                        
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

export default UserOnClick;
