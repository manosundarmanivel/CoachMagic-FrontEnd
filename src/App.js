import Header from "./components/Header";
import './App.css';
import Home from "./components/Home";
import {Outlet, RouterProvider, createBrowserRouter} from 'react-router-dom'
import Signin from "./components/Signin";
import SignUp from "./components/SignUp";
import Verification from "./components/Verification";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import OtpVerification from "./components/OtpVerification";
import Settings from "./components/Settings";
import Main from "./components/Main";

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Main/>,
    children:[
      {
        path:'/',
        element:<Dashboard/>
      },
      {
        path:'/settings',
        element:<Settings/>
      }
    ]
  }
 
])

function App() {
  return (
    <div className="">
    
    
    <RouterProvider router={appRouter}/>
    </div>
    
  );
}

export default App;
