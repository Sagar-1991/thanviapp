import React from 'react';
import { useFormik, validateYupSchema } from 'formik';
import * as yup from 'yup';
function App() {
    var  myform = useFormik({
        initialValues:{
            fierstname:'',
            Email :'',
        },
        vaalidationSchema: yup.object({
            firstname:yup.string().required("konchem chusko"),
            email:yup.string().email().required("sarigga enter chey...")
        }),
        onSubmit:(x)=>{
            console.log("HI")
            console.log(x)
         }
    })
  return (
    <div style={{border:'2px solid red',padding:"10px",margin:"10px"}}>
       <h1>Formik Practical Class</h1>
        <div style={{border:'2px solid blue',padding:"10px",margin:"10px"}}>
            <form onSubmit={myform.handlesubmit}>
                <input type="text" name="firstname" onChange={myform.handlechange}/>
                <br />
                <input type="email" name="email" onChange={myform.handlechange}/>
                <br />
                {JSON.stringify(myform.errors)}

                <button type="submi">SAVE</button>

            </form>
        </div>
    </div>
    
  );
}

export default App; 
  