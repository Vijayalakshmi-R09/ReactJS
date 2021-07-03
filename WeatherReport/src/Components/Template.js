import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Table.css'
import weatherdata from './weatherdata.json'

export default function Template() {
    const dte=new Date();
    const [cityn,setCity]=useState("");

   const handleOnChange=(event)=>{
        const selectedCity=event.target.value;
        return setCity(selectedCity);
     }
    return (
        <div class="limiter">    
		<div class="container-table100">
			<div class="wrap-table100">
				<div class="table100">
                <header> <h1>Weather Forecast</h1> </header>
                <label className="hsize">Today's Date : </label>
                <label className="dt">{dte.toDateString()} </label>
                <br></br><br></br><label className="scity">CITY : </label>
                <select name="cities" onChange={handleOnChange}>
                <option value="select city" id="-1">select city</option>
                <option value="New Delhi" id="1" >New Delhi</option>
                <option value="Mumbai" id="2" >Mumbai</option>
                <option value="Bangalore" id="3" >Bangalore</option>
                <option value="Chennai" id="4" >Chennai</option>
                <option value="Kolkata" id="5" >Kolkata</option>
            </select><br></br>
            <br></br><br></br>
					<table>
						<thead>
							<tr class="table100-head">
								<th class="column1">CITY</th>
								<th class="column2">MAX Temperature</th>
								<th class="column3">MIN Temperature</th>
								<th class="column4">Temperature</th>
								<th class="column5">Percipitation</th>
								<th class="column6">Wind Speed</th>
                                <th class="column7">Humidity</th>
                                <th class="column8">ForeCast</th>
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
                                            <td class="column1">{post.city}</td>
                                            <td class="column1">{post.max_temperature}</td>
                                            <td class="column1">{post.min_temperature}</td>
                                            <td class="column1">{post.temperature}</td>
                                            <td class="column1">{post.precipitation}</td>
                                            <td class="column1">{post.wind_speed}</td>
                                            <td class="column1">{post.relative_humidity}</td>
                                            <td class="column1">{post.conditions}</td>
                                        </tr>       
                            )
                        })}
                        </tbody>  
                        </table>
                            </div>
                        </div>
                    </div>
                </div>
)
}
