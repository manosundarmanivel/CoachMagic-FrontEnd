
import './App.css';

import {RouterProvider, createBrowserRouter} from 'react-router-dom'

import Dashboard from "./components/Dashboard";

import Settings from "./components/Settings";
import Main from "./components/Main";
import OtpVerification from './components/OtpVerification';
import Signin from './components/Signin';
import Signup from './components/SignUp';
import Invite from './components/Invite';

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
  },
  {
    path:'/otp',
    element:<OtpVerification/>
  },
  {
    path:'/signin',
    element:<Signin/>
  },
  {
    path:'/signup',
    element:<Signup/>
  }
  ,{
    path:'/invite',
    element:<Invite/>
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
