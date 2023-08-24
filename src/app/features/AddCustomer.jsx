import React from 'react';
import { Formik, Form, Field} from 'formik';
import { useAddCustomersMutation, useGetAllCustomersQuery } from '../services/AddCustApi';

function AddCustomer() {
    var {isLoading,isError,data}=useGetAllCustomersQuery();
      console.log(data)
    var [addCustfn]=useAddCustomersMutation();
    
    
    
  return ( 
    <div>
        
     <div className='mybox'>
        <Formik
            initialValues={{ fullname:'', phonenumber: '',place:'',feedback:"" }}
            onSubmit={(values, { setSubmitting }) => {
                console.log(values)
                addCustfn({...values})
                .then((res)=>(
                  console.log(res)))
            }}
        >
       {({ isSubmitting }) => (
       <div >
         <Form >

            <Field className='form'   type="text" name="fullname" placeholder="fullname" required/><br></br><br></br>
          
            <Field className='form' type="number" name="phonenumber" placeholder="phonenumber" required /><br></br><br></br>
            <Field className='form' type="text" name="place" placeholder="place" required/><br></br><br></br>
            
           <Field className='form' as="select" name="role" placeholder="role" required>
              <option value="user">User</option>
              <option value="admin">Admin</option>
              </Field> <br></br><br></br>
            <Field component="textarea" className='form' name="feedback" placeholder="Feedback" required></Field><br></br><br></br>
            <button type="submit" disabled={isSubmitting}>Submit</button>
         </Form>
         </div>
       
       )}
      
     
     
     </Formik>
    </div>
    </div>
  )
}

export default AddCustomer