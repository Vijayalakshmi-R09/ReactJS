import React, {useState,useEffect}from 'react'
import axios from 'axios';
import './Home.css'
import './Dashcss.css'
export default function Dashboard() 
{
    const[result,setResult]=useState();
    
    useEffect(()=>{
        console.log("Executed after render method=======");
        axios.get("http://localhost:4001/records").then(result => {
          console.log(result.data.length);
          setResult(result.data.length);
        }).catch(e=>{
          console.error("ERR in country.json...");
          console.error(e);
        }).finally(()=>{
          console.log("loaded");
        })
    },[])
    return (
        <div><br>
        </br><br></br><br></br>
          <div className="container-md"><h2>DASHBOARD</h2>
          <div classname="col-lg-1">
           <div className="card text-white bg-dark mb-3">
            <div className="card-body">
              <h5 className="card-title">RECORDS Audit</h5>
              <p className="card-text">{result}</p>
            </div>
          </div>
         </div>
         </div>
         </div>
    )
}


