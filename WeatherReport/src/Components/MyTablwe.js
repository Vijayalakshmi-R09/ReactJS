import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react'
import weatherdata from './weatherdata.json'
import Table from './Table.css'
export default function MyTablwe() 
{
   const [cityn,setCity]=useState("");
    return (
        <div>
            <label classname="s1">CITY </label>
            <select name="cities" onChange={(e)=>{
             const selectedCity=e.target.value;
            setCity(selectedCity);
          }
        }>
                <option value="select city" id="-1">select city</option>
                <option value="New Delhi" id="1" >New Delhi</option>
                <option value="Mumbai" id="2" >Mumbai</option>
                <option value="Bangalore" id="3" onChange>Bangalore</option>
                <option value="Chennai" id="4" onChange>Chennai</option>
                <option value="Kolkata" id="5" onChange>Kolkata</option>
            </select><br></br>
            <label className="l1"> Selected City: {cityn}</label>
            <table>
                <thead>
                    <tr>
                    <th>CITY</th>
                    <th>MAX Temperature</th>
                    <th>MIN Temperature</th>
                    <th>Temperature</th>
                    <th>Percipitation</th>
                    <th>Wind Speed</th>
                    <th>Humidity</th>
                    <th>ForeCast</th>
                    </tr>
                </thead>
                <tbody>
               
            {weatherdata.filter((post)=>
            {
                if(post.city.includes(cityn))
                {
                   return post
                }
            }).map((post)=>{
                return(
                            <tr>
                                <td class="t1">{post.city}</td>
                                <td>{post.max_temperature}</td>
                                <td>{post.min_temperature}</td>
                                <td>{post.temperature}</td>
                                <td>{post.precipitation}</td>
                                <td>{post.wind_speed}</td>
                                <td>{post.relative_humidity}</td>
                                <td>{post.conditions}</td>
                            </tr>       
                )
            })}
            </tbody>  
            </table>
        </div> 
    )
}