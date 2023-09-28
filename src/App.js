
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
import Community from './components/Community';
import Connect from './components/Connect'
import Query from './components/Query';
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
      },
      {
        path:'/profile',
        element:<ProfilePage/>
      },
      {
        path:'//invitations',
        element:<Invite2/>
      },
      {
        path:'/Connect',
        element:<Connect/>
      },
      {
        path:'/community',
        element:<Community/>

      },
      {
        path:'/query',
        element:<Query/>
      }
    ]
  },
  {
    path:'/signin',
    element:<Signin/>
  },
  {
    path:'/ConnectPage',
    element:<Connect/>
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
  },
  {
      path:'/community',
      element:<Community/> 
  },
  {
    path:'/query',
    element:<Query/>

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
