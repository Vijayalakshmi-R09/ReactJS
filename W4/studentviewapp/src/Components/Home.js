import React from 'react'
import './Home.css'
import home from './home.jpg';
export default function Home() {
    return (
        <div>
          <div className="container ">
            <div className="col-md-40">
            <div className="card"> 
            <div className="card-header"><h1>Home</h1></div>
            <div className="card-body"> 
                <body>
                <img className="card-img-top"src={home}  /> 
            
                </body>
            </div> 
            </div>
            </div>
            </div>
        </div>
    )
}
