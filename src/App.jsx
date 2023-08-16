import React from 'react';
import {Outlet} from 'react-router-dom';
import Aboutus from './Aboutus';
import Contactus from './contactus'
function App() {
  return (
    <div>
      <h1>This is App</h1>
   

      <Outlet></Outlet>
      <Aboutus></Aboutus>
      <Contactus></Contactus>
    </div>
  )
}

export default App