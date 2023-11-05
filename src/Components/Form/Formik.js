import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

let style = {
    // padding:"10px",
    margin: "20px"
}

let error ={
    border:"2px solid red",
    color:"red",
    width:"200px",
    height:"20px",
    margin:"3px"
}
export const Formik = () => {
    //handel blue is used for touched method
    let intialValue={
        name: "",
        email: "",
        channel: ""
    }

    let validateFun= (values) => {
        let errors = {};

        if (!values.name) {
            errors.name = "Required"
        }

        if (!values.email) {
            errors.email = "Required"
        }

        console.log("error", errors)

        return errors
    }
  
    let formik = useFormik({
        initialValues: intialValue,
        onSubmit: value => {
            console.log("value", value)
        },
        validate:validateFun
        

    })

    console.log("formik ", formik.errors)
    console.log("formik ", formik.touched)
    return (<>

        <div>This component contain form with formik</div>
        <form onSubmit={formik.handleSubmit}>
            <div style={style}>

                <label htmlFor='name'>name</label>
                <input type="text" name='name' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}/>
                {
                   
                     
                     formik.touched.name && formik.errors.name ? <div style={error}>{formik.errors.name}</div> : null 
                }
            </div>
            <div style={style}>

                <label htmlFor='email'>email</label>
                <input type="email" name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                {
                    formik.touched.email && formik.errors.email ? <div style={error}>{formik.errors.email}</div> : null
                }
            </div>
            <div style={style}>

                <label htmlFor='channel'>channel</label>
                <input type="channel" name='channel' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.channel} />
                {
                    formik.touched.channel && formik.errors.channel ? <div style={error}>{formik.errors.channel}</div> : null
                }
            </div>
            <button style={style} type='submit'>Submit</button>
        </form>
    </>
    )
}
