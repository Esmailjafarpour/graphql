import './App.css';
import Users from "./components/Users";
import User from './components/User';
import UserOnClick from './components/UserOnClick';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <div className="App" style={{display : "flex" , justifyContent : "center"}}>

        {/* <Users/> */}
        {/* <User/> */}
        {/* <UserOnClick/> */}
        <CreateUser/>
 
    </div>
  );
}

export default App;
