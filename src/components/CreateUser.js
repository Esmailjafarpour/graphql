import React , {useState} from 'react';
import {gql , useMutation} from '@apollo/client';

const CREATE_USER = gql`
     mutation createUser(
          $name : String!,
          $username : String!,
          $email : String!,
          $phone : String!,
     ){
          createUser(
               input : {
                    name : $name,
                    username : $username,
                    email : $email,
                    phone : $phone,
               }
          ){
               id,
               name,
               username,
               email,
               phone
          }
     }
`

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
               <div>
                    <input type="text" name="name" value={state.name} onChange={(event) => changeHandler(event)}/>
                    <input type="text" name="nameuser" value={state.nameuser} onChange={(event) => changeHandler(event)}/>
                    <input type="text" name="email" value={state.email} onChange={(event) => changeHandler(event)}/>
                    <input type="text" name="phone" value={state.phone} onChange={(event) => changeHandler(event)}/>
               </div>
                <button onClick={()=> createUser()}>Get User</button>
          </div>
     );
}

export default CreateUser;
