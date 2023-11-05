import React from "react";
import { Formik,Form,Field,ErrorMessage } from "formik";
import * as Yup from "yup";

let style = {
    // padding:"10px",
    margin: "20px",
};

let error = {
    border: "2px solid red",
    color: "red",
    width: "200px",
    height: "20px",
    margin: "3px",
};
export const FormikNewForm = () => {
    //handel blue is used for touched method
    let intialValue = {
        name: "",
        email: "",
        channel: "",
    };

    let validateFun = Yup.object({
        name: Yup.string().required("this yup required message"),
        email:Yup.string().email(),
        channel: Yup.string().required()
    })

    let onSubmit= value => {
        console.log("value", value)
    }

  
      return (
        <>
            <div>This component contain form with new formik with Yup validation</div>
            <Formik initialValues={intialValue} onSubmit={onSubmit} validationSchema={validateFun}>

            <Form>
                <div style={style}>
                    <label htmlFor="name">name</label>
                    <Field
                        type="text"
                        name="name"
                       id="name"
                        
                    />
                   <ErrorMessage name="name"/>
                </div>
                <div style={style}>
                    <label htmlFor="email">email</label>
                    <Field
                        type="email"
                        name="email"
                        id="email"
                                            />
                   <ErrorMessage name="email"/>
                </div>
                <div style={style}>
                    <label htmlFor="channel">channel</label>
                    <Field
                        type="channel"
                        name="channel"
                        id="channel"
                    />
                 <ErrorMessage name="channel"/>
                </div>
                <button style={style} type="submit">
                    Submit
                </button>
            </Form>
            </Formik>
        </>
    );
};
