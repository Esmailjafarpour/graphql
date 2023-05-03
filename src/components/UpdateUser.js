import React , {useState} from 'react';
import {useMutation} from '@apollo/client';
import {UPDATE_USER} from '../graphql/mutations';

const UpdateUser = () => {

     const [state, setAllState] = useState({
          id : "",
          name : ""
     });

     const changeHandler = (event) => {

          setAllState({
               ...state,
               [event.target.name] : event.target.value 

               } 
          )
     }

     const [updateUser,{loading , data , error , called}] = useMutation(

          UPDATE_USER,{

               variables : {
                    id : state.id,
                    name : state.name
               }
              
          }
     );
     console.log({loading , data , error , called})
     return (
          <div>
               <div style={{display : "flex" , flexDirection : "column"}}>
                    <input type="text" name="id" value={state.id} onChange={(event) => changeHandler(event)} placeholder="Enter Id"/>
                    <input type="text" name="name" value={state.name} onChange={(event) => changeHandler(event)} placeholder="Enter text"/>
               </div>
                <button onClick={()=> updateUser()}>Update User</button>
          </div>
     );
}

export default UpdateUser;
