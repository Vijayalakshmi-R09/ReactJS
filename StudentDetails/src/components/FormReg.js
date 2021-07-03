import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import './Form.css'
import Formdisplay from './Formdisplay';

export default function FormReg() {
    

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    
    const validationSchema = Yup.object({
        firstname : Yup.string().required("Firstname is mandatory"),
        lastname : Yup.string().required("lastname is mandatory"),
        gen: Yup.string().required("Gender must"),
        email : Yup.string().email("Invalid Email").required("Pls Enter a Email"),
        age:Yup.number().typeError("Enter a valid age").min(20," Min Age is 20").max(60,"Max age is 60"),
        phonenumber : Yup.string().matches(phoneRegExp,"Invalid"),
        institute: Yup.string().required("Req"),
        department : Yup.string().required("Req")
    }) 


    const { handleSubmit,handleChange,values,errors} = useFormik({
        initialValues: {
            firstname:'',
            lastname:'',
            age:0,
            gen:'',
            email:'',
            phonenumber: '',
            institute:'',
            department :''
        },
        validationSchema,
        onSubmit(values) {
            console.log("=============Submitted");
            console.log(values);
        }
    }) 

    return (
        <div>
             <div className="container-sm ">
            <div className="col-sm-8">
            <div className="card">
            <div className="card-header">STUDENT DETAILS</div>
            <div className="card-body">
            <form onSubmit={handleSubmit} noValidate>
            
                <div className="row">
                <div className="col-sm-4 form-group">
                    <h5>First Name</h5>
                </div>
                <div className="col-sm-1 form-group">
                    <label className="control-label">:</label></div>
                        <div className="col-sm-3 form-group">
                            <input type="text" name="firstname" onChange={handleChange} values={values.firstname} placeholder="First Name" />
                            <h6>{errors.firstname ? errors.firstname : null}</h6>
                            
                        </div>
                </div>
                <div className="row">
                <div className="col-sm-4 form-group">
                    <h5>Last Name</h5>
                </div>
                <div className="col-sm-1 form-group">
                    <label className="control-label">:</label></div>
                        <div className="col-sm-3 form-group">
                            <input  type="text" name="lastname" onChange={handleChange} values={values.lastname} placeholder="Last Name" /> 
                            <h6>{errors.lastname ? errors.lastname : null}</h6>
                        </div>
                </div>
                <div className="row">
                <div className="col-sm-4 form-group">
                    <h5>AGE</h5>
                </div>
                <div className="col-sm-1 form-group">
                    <label className="control-label">:</label></div>
                        <div className="col-sm-3 form-group">
                            <input type="text" name="age" onChange={handleChange} values={values.age} placeholder="age" /> 
                            <h6>{errors.age ? errors.age : null}</h6>
                        </div>
                </div>
                <div className="row">
                <div className="col-sm-4 form-group">
                    <h5>Gender</h5>
                </div>
                <div className="col-sm-1 form-group">
                    <label className="control-label">:</label></div>
                        <div className="col-sm-3 form-group">
                        <input type="text" name="gen" onChange={handleChange} values={values.gen}/> 
                        </div>
                </div>
                <div className="row">
                <div className="col-sm-4 form-group">
                    <h5>Email ID</h5>
                </div>
                <div className="col-sm-1 form-group">
                    <label className="control-label">:</label></div>
                        <div className="col-sm-3 form-group">
                            <input  type="text" name="email" onChange={handleChange} values={values.email} /> 
                           <h6> {errors.email ? errors.email : null}</h6>
                        </div>
                </div>
                <div className="row">
                <div className="col-sm-4 form-group">
                    <h5>Phone Number</h5>
                </div>
                <div className="col-sm-1 form-group">
                    <label className="control-label">:</label></div>
                        <div className="col-sm-1 form-group">
                            <input  type="text" name="phonenumber" onChange={handleChange} values={values.phonenumber} placeholder="Mobile No" /> 
                           <h6>{errors.phonenumber ? errors.phonenumber : null}</h6> 
                        </div>
                </div>
                <div className="row">
                <div className="col-sm-4 form-group">
                    <h5>Institute </h5>
                </div>
                <div className="col-sm-1 form-group">
                    <label className="control-label">:</label></div>
                        <div className="col-sm-1 form-group">
                            <input  type="text" name="institute" onChange={handleChange} values={values.institute} placeholder="Institute " /> 
                           <h6>{errors.institute ? errors.institute : null}</h6> 
                        </div>
                </div>
                <div className="row">
                <div className="col-sm-4 form-group">
                    <h5>Department</h5>
                </div>
                <div className="col-sm-1 form-group">
                    <label className="control-label">:</label></div>
                        <div className="col-sm-1 form-group">
                            <input  type="text" name="department" onChange={handleChange} values={values.department} placeholder="Department" /> 
                           <h6> {errors.department ? errors.department : null}</h6>
                        </div>
                </div>
                    <button className="btn btn-dark" >Submit </button>
            </form>
            </div>
           
            </div>
            <Formdisplay data={values}/>
            </div>
           
        </div>
        </div>
    )
}