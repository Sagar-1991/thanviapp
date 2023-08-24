import React from 'react';

import { useState } from 'react';
import AddCustomer from './app/features/AddCustomer';
import CustomerList from './app/features/CustomerList';
import { Outlet } from 'react-router';

import { store } from './app/store';
import { Provider, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import Navbars from './app/features/navbar/Navbars';
function App() {

return (
      <Provider store={store}>
        <div>
  <Navbars></Navbars>         
<Outlet></Outlet>
</div>
 </Provider> 
  );
}
export default App;