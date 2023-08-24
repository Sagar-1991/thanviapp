import React,{useEffect, useState} from 'react';
import { Formik, Form, Field} from 'formik';
import { useAddCustomersMutation, useGetAllCustomersQuery, useUpdateCustomersMutation } from '../services/AddCustApi';
function EditCustomer(props) {
  console.log(props)
    var {isLoading,isError,data}=useGetAllCustomersQuery();
      console.log(data)
    var [updateCustfn]=useUpdateCustomersMutation();
    const [customers,setCustomers]=useState({...props.customers})
    useEffect(()=>{
      setCustomers({...props.customers})
    },[props.customers])
    const[editflag,setEditflag]=useState(false);
    console.log(customers)
     return ( 
    <div>
       
     <div className='mybox'>
        <Formik
             initialValues={{...customers}}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values)
                updateCustfn({...values})
                .then((res)=>{(console.log(res))})
            }}
        >
       {({ isSubmitting }) => (
       
         <Form >
            <Field  className='form' type="text"  name="fullname" placeholder="Fullname" required/><br></br><br></br>
            <Field  className='form' type="number" name="phonenumber" placeholder="phonenumber" required  /><br></br><br></br>
            <Field  className='form' type="text" name="place" placeholder="place" required/><br></br><br></br>
            <Field className='form' as="select" name="role" placeholder="role" required>
              <option value="user">User</option>
              <option value="admin">Admin</option>
              </Field> <br></br><br></br>
            <Field  className='form' component="textarea"  name="feedback" placeholder="Feedback" required></Field><br></br><br></br>
            <button type="submit" >Submit</button>
         </Form>
        
       
       )}
      
     
     
     </Formik>
    </div>
    </div>
  )
}

export default EditCustomer