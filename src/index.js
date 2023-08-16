import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Contactus from './contactus';
import Aboutus from './Aboutus';
var router = createBrowserRouter([
    {
        path:"/",
        element:<App></App>,
        children:[

            {
                path:"/contactus",
                element:<Contactus></Contactus>
            },
            {
                path:"/Aboutus",
                element:<Aboutus></Aboutus>
            }
        ]
    },
    
]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}></RouterProvider>
   
);


reportWebVitals();
