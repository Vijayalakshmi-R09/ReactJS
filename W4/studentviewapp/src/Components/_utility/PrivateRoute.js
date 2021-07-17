import React from 'react'
import { Redirect,Route } from 'react-router-dom';
import Login from '../Login';
import Dashboard from '../Dashboard';
import Error from '../Error';

export default function PrivateRoute({component:Component,flag,...rest}) 
{
    console.log(flag);
    console.log(rest);
    return (
        <div>
            <Route 
                render={(rprops)=>{
                    if (!flag) {
                        console.log(" i am  Redirection");
                        return (
                          <Redirect
                            to={{ pathname: "/error", state: { from: rprops.location } }}
                          />
                        );
                      }
            
                      return <Component {...rprops} />;
                    }}
                   />        
        
        </div>
    )
}
