import Header from "./components/Header";
import './App.css';
import Home from "./components/Home";
import {Outlet, RouterProvider, createBrowserRouter} from 'react-router-dom'
import Signin from "./components/Signin";
import SignUp from "./components/SignUp";

const appRouter = createBrowserRouter([{
  path:"/",
  element: <Home/>,
  
  
},
{
  path:"/signup",
  element:<SignUp/>
}])

function App() {
  return (
    <div>
    <Header/>
    <Outlet/>
    <RouterProvider router={appRouter}/>
    </div>
    
  );
}

export default App;
