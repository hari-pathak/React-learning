import Greetings from "./components/Greetings";
import UserDetails from "./components/UserDetails";
import HomePage from "./pages/HomePage";

function App() {

  const user = {name: "Gitq", age: 30, address: 'Bharatpur-7'}

  const abc = [{
    marriedIn: "ktm",
    marriedTo: "Ram"
  },
{
  nowLivingIn: "Aus",
  with: 'herbrother'
},

{
  studies: "IT",
  in:"University of Sydney"
}

]

  return (
    <>
     {/* <HomePage/> */}

    <Greetings name="Hari" age={20}/>
    <UserDetails marriedDetails={abc} userDetails = {user}/>
     
    </>
  );
}

export default App;


