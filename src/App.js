
import './App.css';

import {RouterProvider, createBrowserRouter} from 'react-router-dom'

import Dashboard from "./components/Dashboard";

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
