import React , {useState} from 'react';
import {useMutation} from '@apollo/client';
import {CREATE_USER} from '../graphql/mutations';


const CreateUser = () => {

     const [state, setAllState] = useState({
          name : "",
          username : "",
          email : "",
          phone : ""
     });

     const changeHandler = (event) => {

          setAllState({
               ...state,
               [event.target.name] : event.target.value 

               } 
          )
     }

     const [createUser,{loading , data , error , called}] = useMutation(

          CREATE_USER,{

               variables : {
                    name : state.name,
                    username : state.nameuser,
                    email : state.email,
                    phone : state.phone,  
               }
              
          }
     );
     console.log({loading , data , error , called})
     return (
          <div>
               <div style={{display : "flex" , flexDirection : "column"}}>
                    <input type="text" name="name" value={state.name} onChange={(event) => changeHandler(event)} placeholder="Enter text"/>
                    <input type="text" name="nameuser" value={state.nameuser} onChange={(event) => changeHandler(event)} placeholder="Enter text"/>
                    <input type="text" name="email" value={state.email} onChange={(event) => changeHandler(event)} placeholder="Enter text"/>
                    <input type="text" name="phone" value={state.phone} onChange={(event) => changeHandler(event)} placeholder="Enter text"/>
               </div>
                <button onClick={()=> createUser()}>Get User</button>
          </div>
     );
}

export default CreateUser;
