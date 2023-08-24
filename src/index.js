import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider} from "react-router-dom";
  
import AddCustomer from './app/features/AddCustomer';
import CustomerList from './app/features/CustomerList';
import Home from './Pages/Home';
import About from './Pages/About';
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import Logout from './Pages/Logout';
import AddProperties from './app/features/property/AddProperties';
import Img from './Pages/Img';
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/Login",
          element:<Login></Login>
      },
      {
        path:"/Registration",
        element:<Registration></Registration>
    },
        {
            path:"/About",
            element:<About></About>
        },
        {
        path:"/AddCustomer",
        element:<AddCustomer></AddCustomer>
    },
    {
        path:"/CustomerList",
        element:<CustomerList></CustomerList>
    },
    {
      path:"/Logout",
      element:<Logout></Logout>
  },
  {
    path:"/AddProperties",
    element:<AddProperties></AddProperties>
},
{
  path:"/Img",
  element:<Img></Img>
},
]
  
    }
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} ></RouterProvider>
 
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();