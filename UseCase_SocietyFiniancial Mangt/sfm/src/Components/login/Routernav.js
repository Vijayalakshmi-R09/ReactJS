import React from 'react'
import Login from './Login'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dashboard from '../admin/Dashboard/Dashboard';
import { Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import Home from './Home';
export default function Routernav() {
    return (
        <div>
     <Router>
      <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/home">Blossom Society Management</Navbar.Brand>
        <Nav className="mr-auto" >
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
         </Nav>  
      </Navbar> 
    
        <Switch>
        <Route path="/home" exact component={Home} ></Route>
          <Route path="/login" exact component={Login} ></Route> 
          <Route path="/dashboard" exact component={Dashboard}></Route>
        </Switch>
      
    </div>
    </Router>
    </div>
    
    )
}
