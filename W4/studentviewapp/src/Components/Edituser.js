import React, {useState,useEffect} from 'react';
import { useHistory, useParams } from "react-router-dom";
import axios from 'axios';
import './Form.css';

export default function Edituser() 
{
    let history = useHistory();
    const { id } = useParams();
    const [scountry,setSCountry]=useState([]);
    const [user, setUser] = useState({
        firstname:'',
        lastname:'',
        age:0,
        gen:'',
        email:'',
        phonenumber: '',
        institute:'',
        department :'',
        country: -1
      });
      const { firstname, lastname, age,gen, email, phonenumber,institute,department,country} = user;
      const onInputChange = e => 
      {
        setUser({ 
            ...user,
             [e.target.name]: e.target.value 
            });
      };

      useEffect(() => {
        fetch("http://localhost:4000/country").then(res => res.json()).then(data=>{
            console.log(data);
            setSCountry(data);
    }).catch(e=>{
      console.error("error in city values");
      console.error(e);
    }).finally(()=>{
      console.log("I am in finally");
    })
    loadUser();
    }, []);
    
      const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:4001/records/${id}`, user);
        console.log(user);
        history.push("/");
        alert("Updated Successfully");
      };
    
      const loadUser = async () => {
        const result = await axios.get(`http://localhost:4001/records/${id}`);
        setUser(result.data);
        
      };

    return (
        <div><br></br>
            <div className="container-lg ">
            <div className="col-lg-10">
            <div className="card text-center">
            <div className="card-header"><h4>STUDENT DETAILS</h4></div>
            <div className="card-body">
            <form onSubmit={e => onSubmit(e)}>
            
                <div className="row">
                <div className="col-sm-4 form-group">
                    <h5>First Name</h5>
                </div>
                <div className="col-sm-1 form-group">
                    <label className="control-label">:</label></div>
                        <div className="col-sm-3 form-group">
                            <input type="text" name="firstname" onChange={e => onInputChange(e)} value={firstname} placeholder="First Name" />
                            
                            
                        </div>
                </div>
                <div className="row">
                <div className="col-sm-4 form-group">
                    <h5>Last Name</h5>
                </div>
                <div className="col-sm-1 form-group">
                    <label className="control-label">:</label></div>
                        <div className="col-sm-3 form-group">
                            <input  type="text" name="lastname" onChange={e => onInputChange(e)} value={lastname} placeholder="Last Name" /> 
                            
                        </div>
                </div>
                <div className="row">
                <div className="col-sm-4 form-group">
                    <h5>AGE</h5>
                </div>
                <div className="col-sm-1 form-group">
                    <label className="control-label">:</label></div>
                        <div className="col-sm-3 form-group">
                            <input type="text" name="age" onChange={e => onInputChange(e)} value={age} placeholder="age" /> 
                            
                        </div>
                </div>
                <div className="row">
                <div className="col-sm-4 form-group">
                    <h5>Gender</h5>
                </div>
                <div className="col-sm-1 form-group">
                    <label className="control-label">:</label></div>
                        <div className="col-sm-3 form-group">
                        <input type="text" name="gen" onChange={e => onInputChange(e)} value={gen} placeholder="Gender"/> 
                        
                        </div>
                </div>
                <div className="row">
                <div className="col-sm-4 form-group">
                    <h5>Email ID</h5>
                </div>
                <div className="col-sm-1 form-group">
                    <label className="control-label">:</label></div>
                        <div className="col-sm-3 form-group">
                            <input  type="text" name="email" onChange={e => onInputChange(e)} value={email} placeholder="EmailID"/> 
                           
                        </div>
                </div>
                <div className="row">
                <div className="col-sm-4 form-group">
                    <h5>Phone Number</h5>
                </div>
                <div className="col-sm-1 form-group">
                    <label className="control-label">:</label></div>
                        <div className="col-sm-1 form-group">
                            <input  type="text" name="phonenumber" onChange={e => onInputChange(e)} value={phonenumber} placeholder="Mobile No" /> 
                           
                        </div>
                </div>
                <div className="row">
                <div className="col-sm-4 form-group">
                    <h5>Institute </h5>
                </div>
                <div className="col-sm-1 form-group">
                    <label className="control-label">:</label></div>
                        <div className="col-sm-1 form-group">
                            <input  type="text" name="institute" onChange={e => onInputChange(e)} value={institute} placeholder="Institute " /> 
                           
                        </div>
                </div>
                <div className="row">
                <div className="col-sm-4 form-group">
                    <h5>Department</h5>
                </div>
                <div className="col-sm-1 form-group">
                    <label className="control-label">:</label></div>
                        <div className="col-sm-1 form-group">
                            <input  type="text" name="department" onChange={e => onInputChange(e)} value={department} placeholder="Department" /> 
                           
                        </div>
                </div>
                <div className="row">
                <div className="col-sm-4 form-group">
                    <h5>Country Origin</h5>
                </div>
                <div className="col-sm-1 form-group">
                    <label className="control-label">:</label></div>
                        <div className="col-sm-1 form-group">
                        <select name="country" onChange={e => onInputChange(e)} value={country}>
                            <option value="-1">Please select a country of origin</option>
                            {scountry.map((x) => {
                            return <option key={x.id} value={x.name}>{x.name}</option>;
                            })}
                        </select> 
                          
                        </div>
                </div>
                    <button className="btn btn-outline-success active" >Update</button>
            </form>
            </div>
           
            </div>
            
            </div>
        </div>
        </div>
    )
}