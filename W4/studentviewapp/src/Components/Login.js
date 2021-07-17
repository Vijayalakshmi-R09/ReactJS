import React,{useState,useEffect} from 'react'
import './Login.css'
import './Home.css'
import axios from 'axios';
import { Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import { useHistory } from 'react-router';

export default function Login(props) 
{
    const [result,setResult]=useState([]);
    const history=useHistory();
    let isAuth=false;
    
    const [Values, setValues] = useState([]);
    const handleOnChange=(e)=>{
        const {name,value}=e.target;
        setValues((prev)=>{
        return{
            ...prev,
            [name]:value
        }}) 
    } 
   
   const  handleOnSubmit=(e)=> {
        e.preventDefault();
        result.map((x)=>{
             if(Values.uname===x.uname && Values.pwd===x.pwd)
            {
                alert("Login Successfull");
                console.log("=============Submitted");
                console.log(Values);
                isAuth=true;
                console.log("Login Component")
                console.log(isAuth);
               // props.onUserAdd(isAuth);  
            }   
            else{
                alert("INVALID USER OR PASSWORD")
                isAuth=false;
            }
        })
        // if(isAuth)
        // {
        //    history.push('/dashboard');
        // }
    }
   
    useEffect(()=>{
        console.log("Executed after render method=======");
        axios.get("http://localhost:4003/cred").then(result => {
          console.log(result.data);
          setResult(result.data);
        }).catch(e=>{
          console.error("ERR in cred.json...");
          console.error(e);
        }).finally(()=>{
          console.log("loaded");
        })
    },[])
   
    return (
        <div>
           
            <div className="login">
                <div className="login-triangle"></div>
        
                    <h2 className="login-header-dark">LOGIN </h2>

                     <form className="login-container">
                        <p><input type="text" name="uname" onChange={handleOnChange} value={Values.uname} placeholder="Username"/></p>
                        <p><input type="password" name="pwd"  onChange={handleOnChange} value={Values.pwd} placeholder="Password"/></p>
                        <p><input type="submit" onClick={handleOnSubmit} value="Log in" to={`/dashboard`}/></p>
                     </form>
                </div>
              {/* <Route path="/login" exact component={Login}/> */}
        </div>
       
    )
}
