import React from 'react'
import { Formik, Form, Field} from 'formik';
import {useAddLoginDetMutation, useGetUserLoginDetQuery, useLazyGetUserLoginDetQuery } from '../app/services/LogindetApi'
import {  useSelector,useDispatch } from 'react-redux';
import  {updateuser}  from './userSlice';
import { useNavigate } from 'react-router-dom';

function Login() {
     //var [userlogin]=useAddLoginDetMutation();
      var [userlogin]=useLazyGetUserLoginDetQuery();
     const user2 = useSelector((state) => state.userSlice.userdet)
     console.log(user2)
     const dispatch = useDispatch()
     const navigate = useNavigate();
    
  return (
    <div>
      
       <div className='mybox'>
       <Formik
            initialValues={{phonenumber:"",password:"",role:"admin" }}
            onSubmit={(values, { setSubmitting }) => {
                console.log(values)
              userlogin({...values}).then((res)=>{
                 console.log(values);
                 console.log(res.data[0])
                 dispatch(updateuser({...res.data[0]}))
                 if(res.data[0]){
                  navigate("/AddCustomer")
                 }
               
              })
            }}
        >
       {({ isSubmitting }) => (
       
         <Form >
           <Field className='form' type="number" name="phonenumber" placeholder="phonenumber" /><br></br><br></br>
          
          <Field className='form' type="password" name="password" placeholder="password"  /><br></br><br></br>
          <button type="submit" disabled={isSubmitting}>Submit</button> 
          
         </Form>
        
       
       )}
      
     
     
     </Formik>
    </div>
    </div>
  )
}

export default Login;