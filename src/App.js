import Header from "./components/Header";
import './App.css';
import Home from "./components/Home";
import {Outlet, RouterProvider, createBrowserRouter} from 'react-router-dom'
import Signin from "./components/Signin";
import SignUp from "./components/SignUp";
import Verification from "./components/Verification";

const appRouter = createBrowserRouter([{
  path:"/",
  element: <Home/>,
  
  
},
{
  path:"/signup",
  element:<SignUp/>
},
{
  path:"/email",
  element:<Verification/>
}
])

function App() {
  return (
    <div className="bg-[#F8F7F1]">
    <Header/>
    <Outlet/>
    <RouterProvider router={appRouter}/>
    </div>
    
  );
}

export default App;
