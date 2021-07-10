import React,{useState,useEffect} from 'react'
import './Form.css'
export default function ViewRec() 
{
    const[res,setResult]=useState([]);
    useEffect(()=>{
        console.log("Executed after render method=======");
        fetch("http://localhost:4001/records").then(res => res.json()).then(data=>{
          console.log(data);
          setResult(data);
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
                <br></br>
            <div className="container-md ">
            <div className="col-sm-10">
            <div className="card"> 
            <div className="card-header"><h4>RECORDS</h4></div>
            <div className="card-body"> 
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
                   {res.map((x)=>{
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
</div></div>
</div>
 )
}
