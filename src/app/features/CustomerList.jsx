import React, { useEffect, useState } from 'react'
import { useDeleteCustomersMutation, useGetAllCustomersQuery,useLazyGetAllCustomersQuery, useUpdateCustomersMutation } from '../services/AddCustApi';
import AddCustomer from './AddCustomer';
import EditCustomer from './EditCustomer';
// import EditCustomer from './EditCustomer';

function CustomerList() {
  var {isLoading,isError,data}=useGetAllCustomersQuery();
  
  var [getCustomers]=useLazyGetAllCustomersQuery();
  var [delcust]=useDeleteCustomersMutation();
  const [editflag,setEditflag]=useState(false);
  const [customers,setCustomers]=useState({});

  console.log(data)
  function abc(n)
  {
    console.log(n)
  }
  function delcust(id)
  {
   delcust(id)
  }
  function updatecust(cus){
    setCustomers({...cus})
    setEditflag(true)
   
  }
  return (
    <div >
       
       
          {
            // editflag && <h3>Loading...</h3>
          }
          {
            editflag && (<EditCustomer customers={customers}></EditCustomer>)
          }
           <div className='mybox'>
          {
            isLoading && <li>Loading...</li>
          }
          {
            !isLoading && data.map((e)=>{
              return<li onClick={()=>{abc(e.fullname)}}><span>{e.fullname}</span>
                {/* <span>{e.phonenumber}</span> */}
                <button onClick={()=>{updatecust(e)}}>update</button>
                <button onClick={()=>{(delcust(e.id))}}>Delete</button>
              </li>
            })
          }
          </div>
        </div>
  )
}

export default CustomerList