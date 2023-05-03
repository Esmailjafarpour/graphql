import React , {useState} from 'react';
import {DELETE_USER} from '../graphql/mutations';
import {useMutation} from '@apollo/client';


const DeleteUser = () => {

     const [id, setId] = useState("");

     const [deleteUser,{loading , data , error , called}] = useMutation(

          DELETE_USER,{

               variables : {
                    id : id,
               }
              
          }
     );
     console.log({loading , data , error , called})
     return (
          <div>
               <div style={{display : "flex" , flexDirection : "column"}}>
                    <input type="text" name="id" value={id} onChange={(e) => setId(e.target.value)} placeholder="Enter Id"/>
               </div>
                <button onClick={deleteUser}>Update User</button>
          </div>
     );
}

export default DeleteUser;
