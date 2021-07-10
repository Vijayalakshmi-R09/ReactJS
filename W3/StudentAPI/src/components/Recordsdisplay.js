import React, {useState,useEffect}from 'react'
import './Form.css';

export default function Recordsdisplay() {
    const[res,setResult]=useState([]);
    const[countrys,setCountry]=useState([]);
    const[selcountry,setSelcountry]=useState("");
    const handleOnChange=(event)=>{
        fetch("http://localhost:4001/records").then(res=>res.json()).then(data=>{
          console.log(data);
          const selectedcountry=event.target.value;
          setSelcountry(selectedcountry);
          return setResult(data); 
        }).catch(e=>{
          console.error("ERR in Student...");
          console.error(e);
        }).finally(()=>{
          console.log("I am in finally");
        })
    }
        useEffect(()=>{
            console.log("Executed after render method=======");
            fetch("http://localhost:4000/country").then(res => res.json()).then(data=>{
              console.log(data);
              setCountry(data);
            }).catch(e=>{
              console.error("ERR in country.json...");
              console.error(e);
            }).finally(()=>{
              console.log("loaded");
            })
        },[])
    
    return (
        <div>
            <div>
            <div className="container-sm ">
            {/* <div className="col-sm-8">
            <div className="card"> */}
            
            <div className="card-body"><br></br>
            <label><h4>SEARCH </h4> </label><h1></h1><select name="countrys" onChange={handleOnChange} value={countrys.name} className="scount">
             <option value="-1">select a country from list</option>
                            {countrys.map((x) => {
                            return <option key={x.id} value={x.name} >{x.name}</option>;
                            })}
             </select> <br></br><br></br>
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                    <th scope="col">ID</th> 
                    <th scope="col">FirstName</th>
                    <th scope="col">LastName</th>
                    <th scope="col">AGE</th>
                    <th scope="col">Gender</th>
                    <th scope="col">EmailID</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Institue</th>
                    <th scope="col">Department</th>
                    <th scope="col">Country</th>
                    </tr>
                </thead>
                <tbody>
                   {res.filter(r=>r.country===selcountry).map((x)=>{
                    return <><tr>
                    <td><label key={x.id}>{x.id}</label></td>
                    <td><label key={x.id}>{x.firstname}</label></td>
                    <td><label key={x.id}>{x.lastname}</label></td>
                    <td><label key={x.id}>{x.age}</label></td>
                    <td><label key={x.id}>{x.gen}</label></td>
                    <td><label key={x.id}>{x.email}</label></td>
                    <td><label key={x.id}>{x.phonenumber}</label></td>
                    <td><label key={x.id}>{x.institute}</label></td>
                    <td><label key={x.id}>{x.department}</label></td>
                    <td><label key={x.id}>{x.country}</label></td>
                    </tr></>})}
                </tbody>
            </table>
        </div>
    </div></div>
{/* </div></div> */}
</div>
 )
}

