import { useState, useEffect } from "react";
import Greetings from "./components/Greetings";
import UserDetails from "./components/UserDetails";
import HomePage from "./pages/HomePage";
import axios from "axios";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AboutPage from "./pages/AboutPage";
import Router from "./routers/Router";
import Layout from "./layout/Layout";

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

const [resourceType, setResourceType] = useState("posts")

const [count, setCounter] = useState(0)

function updateCount(){
  setCounter(count + 1)
}

const [posts, setPosts] = useState([]);

// useEffect(() => {
//   axios.get("https://jsonplaceholder.typicode.com/posts")
//   .then(res => {
//     console.log(res.data);
//     setPosts(res.data)
//   })
//   .catch(err => {
//     console.log(err)
//   })
  
// }, [count])


// A React component’s job is mainly to show things on the screen.

// Sometimes, you also want to do other things when that component is shown or when its data changes.

// Things like:

// Get data from an API (like getting a list of movies).

// Change the page title.

// Set up a timer.

// Listen for a mouse click.

// These other things are called side effects.
// Why?
// Because they happen on the side, apart from just showing the component.

// useEffect(() => {
//   console.log("Component mounted")
// },[])   //displays only once. while refresh

// useEffect(() => {
//   console.log("Component mounted")
// },[count])  runs only then the count is changed


// useEffect(() => {
//   console.log("Component mounted")
// }) runs on every render

  return (
    <>
     {/* <HomePage/> */}

    {/* <Greetings name="Hari" age={20}/>
    <UserDetails marriedDetails={abc} userDetails = {user}/> */}

    {/* <div className="flex flex-col  h-screen items-center justify-center gap-6">
    <div className="flex gap-6">
        <button onClick={()=> setResourceType("posts")} className=" bg-red-300 px-4 py-2 rounded-md">Posts</button>
      <button onClick={() => setResourceType("users")} className="bg-green-300 px-4 py-2 rounded-md">Users</button>
      <button onClick={() => setResourceType("comments")} className="bg-blue-300 px-4 py-2 rounded-md">Comments</button>
    </div>

       <h1>{resourceType}</h1>
    </div> */}

    {/* <h1>Button clicked {count} times</h1>
    <button onClick={updateCount}>Click</button> */}




    <div>
      {/* <ul className="">
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}

   <Layout/>
    </div>

   


     
    </>
  );
}

export default App;


