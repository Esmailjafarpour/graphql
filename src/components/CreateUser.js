import React from 'react';
import {gql , useMutation} from '@apollo/client';

const CREATE_USER = gql`
     mutation{
          createUser(
               input : {
                    name : "nader",
                    username : "jafarpour",
                    email : "esmailJafarpour29@gmail.com",
                    phone : "09176414952",

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

     const [createUser,{loading , data , error , called}] = useMutation(CREATE_USER);
     console.log({loading , data , error , called})
     return (
          <div>
                <button onClick={()=> createUser()}>Get User</button>
          </div>
     );
}

export default CreateUser;
