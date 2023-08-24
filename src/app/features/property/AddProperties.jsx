import React from 'react';
import { Formik, Form, Field,} from 'formik';
import { useAddPropertydetMutation } from '../../services/AddPropertyApi';

function AddProperties() {
      var [addprofn]=useAddPropertydetMutation();
  return ( 
    <div>
        
     <div className='mybox'>
    
        <Formik
            initialValues={{ name:'', img: '',price:'',feedback:"" }}
            onSubmit={(values, { setSubmitting }) => {
                console.log(values)
              //  addprofn({values}).then((res)=>console.log(res))
              addprofn({...values})
                .then((res)=>(
                  console.log(res)))
            }}
        >
       {({ isSubmitting }) => (
       
         <Form >
          <Field ></Field>
          <Field name="name"></Field>
            <Field className='form' type="text" name="name"  placeholder="name" required/><br></br><br></br>
            <Field className='form' type="text" name="img" placeholder="img" required/><br></br><br></br>
            <Field className='form' type="number" name="price" placeholder="price" required /><br></br><br></br>
            <Field className='form' component="textarea" name="feedback" placeholder="Feedback" required></Field><br></br><br></br>
            <button type="submit">Submit</button>
         </Form>
        
       
       )}
      
     
     
     </Formik>
    </div>
    </div>
  )
}

export default AddProperties