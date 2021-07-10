import React, {useState,useEffect} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import './Form.css';
import axios from 'axios';
export default function AxiosFetch()
 {
    const [submitted, setSubmitted] = useState(false);
    const [country,setCountry] = useState([]);
    const [res,setRes] = useState();
    
    const validationSchema = Yup.object({
        country: Yup.string().required("req"),
        uncode : Yup.string().required("Req")
    })


    const { handleSubmit,handleChange,values,errors} = useFormik({
        initialValues: {
            country: -1,
            uncode:0
        },
        validationSchema,
        onSubmit(values) {
            console.log("=============Submitted");
            console.log(values);
            setSubmitted(true);
            
            axios.post(`http://localhost:4002/code`,values).then(res => {
                console.log("saved");
                setRes(res);
                console.log(res.data.id);              
    }).catch(err => console.log(err))
},
}) 
    
      useEffect(()=>{
        console.log("Executed after render method=======");
        axios.get(`http://localhost:4000/country`).then(res =>{
          console.log(res);
          setCountry(res.data);
        }).catch(err => console.log(err)) 
    },[])

    return (
            <div><br></br>
            <div className="container-md ">
            <div className="col-sm-8">
            <div className="card text-center">
            <div className="card-header"><h4>STUDENT DETAILS</h4></div>
            <div className="card-body">
            <form onSubmit={handleSubmit} noValidate>
            <div className="row">
                <div className="col-sm-4 form-group">
                    <h5>Country Origin</h5>
                </div>
                <div className="col-sm-1 form-group">
                    <label className="control-label">:</label></div>
                        <div className="col-sm-1 form-group">
                        <select name="country" onChange={handleChange} value={values.country}>
                            <option value="-1">Please select a country of origin</option>
                            {country.map((x) => {
                            return <option key={x.id} value={x.name}>{x.name}</option>;
                            })}
                        </select> 
                           <h6> {errors.country ? errors.country : null}</h6>
                        </div>
                </div>
                <div className="row">
                <div className="col-sm-4 form-group">
                    <h5>UN CODE</h5>
                </div>
                <div className="col-sm-1 form-group">
                    <label className="control-label">:</label></div>
                        <div className="col-sm-3 form-group">
                            <input type="text" name="uncode" onChange={handleChange} values={values.uncode} placeholder="UN CODE" />
                            <h6>{errors.uncode ? errors.uncode : null}</h6>   
                        </div>
                </div>
                <button className="btn btn-dark" >Submit </button>
            </form>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}
