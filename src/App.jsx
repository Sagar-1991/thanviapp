import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup';

function App() {
 var myform= useFormik({
    initialValues:{
     firstname:'',
     email:''
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required('konchem chusukooo'),
      email:Yup.string().email().required('sarigga enter cheyy..'), 
    }),
    onSubmit:(x)=>{
      console.log(x)
    }
  })
  return (
    <div style={{border:'2px solid blue',padding:'10px',margin:'10px'}}>
      <h1>Formik practical class</h1>
      <div style={{border:'2px solid green',padding:'10px',margin:'10px'}}>
       <form onSubmit={myform.handleSubmit}>
        <input type="text" name='firstname' onChange={myform.handleChange}/>
        <br />
        <input type="text" name='email' onChange={myform.handleChange} />
        <br />
        {JSON.stringify(myform.errors)}
        <button type='submit'>Save</button>
       </form>
      </div>
    </div>
  );
}
export default App; 