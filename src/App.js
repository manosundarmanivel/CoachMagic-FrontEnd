
import './App.css';

import {RouterProvider, createBrowserRouter} from 'react-router-dom'

import Dashboard from "./components/Dashboard";

import Settings from "./components/Settings";
import Main from "./components/Main";
import Signin from './components/Signin';
import Signup from './components/SignUp';
import ProfilePage from './components/profile';
import Invite from './components/Invite';
import Invite2 from './components/Invite2';
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
    path:'/signin',
    element:<Signin/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/Profile',
    element:<ProfilePage/>
  }
  ,{
    path:'/invite',
    element:<Invite/>
  },
  {
    path:'/invite2',
    element:<Invite2/>
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
