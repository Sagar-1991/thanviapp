import React from 'react'
import { Formik, Form, Field, yupToFormErrors,} from 'formik';
import { useAddRegisterDetMutation } from '../app/services/RegisterApi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateuser } from './userSlice';
import * as yup from 'yup';
function Registration() {
  var [addregfn]=useAddRegisterDetMutation();
  // const user1 = useSelector((state) => state.userSlice)
  // console.log(user1)
  const dispatch = useDispatch()
     const navigate = useNavigate();
   
  return (
    <div>
        
        <div className='mybox'>
        
        <Formik
            initialValues={{ firstname:'', lastname: '',email:"",phonenumber:"",password:"",role:"user" }}
            onSubmit={(values, { setSubmitting }) => {
                console.log(values)
              
              addregfn({...values})
                .then((res)=>{(
                  console.log(res.data))
                  // dispatch(updateuser({...res.data}))
                  // if(res.data){
                  navigate("/Img")
                 //}
                })
            }}
          
        >
       {({ isSubmitting }) => (
       
         <Form >
            <Field className='form' type="text" name="firstname" placeholder="firstname" required/><br></br><br></br>
            <Field className='form' type="text" name="lastname" placeholder="lastname" required/><br></br><br></br>
            <Field className='form' type="text" name="email" placeholder="email" required  /><br></br><br></br>
            <Field className='form' type="number" name="phonenumber" placeholder="phonenumber" required></Field><br></br><br></br>
            <Field className='form' type="number" name="password" placeholder="password" required></Field><br></br><br></br>
            <button type="submit">Submit</button>
         </Form>
        
       
       )}
      
     
     
     </Formik>

    </div>
    </div>
  )
}

export default Registration;