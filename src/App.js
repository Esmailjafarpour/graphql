import './App.css';
import Users from "./components/Users";
import User from './components/User';
import UserOnClick from './components/UserOnClick';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';
import DeleteUser from './components/DeleteUser';

function App() {
  return (
    <div className="App" style={{display : "flex" , justifyContent : "center"}}>

        {/* <Users/> */}
        {/* <User/> */}
        {/* <UserOnClick/> */}
        {/* <CreateUser/> */}
        {/* <UpdateUser/> */}
        <DeleteUser/>
 
    </div>
  );
}

export default App;
