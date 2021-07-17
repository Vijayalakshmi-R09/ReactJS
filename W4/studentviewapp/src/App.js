
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import Dashboard from './Components/Dashboard';
import View from './Components/View.js';
import Home from './Components/Home';
import Edit from './Components/Edit';
import Edituser from './Components/Edituser';
import Login from './Components/Login';
import PrivateRoute from './Components/_utility/PrivateRoute';
import Error from './Components/Error';

function App() {
  // let isAuth=false;
  // const handleUserAdd=(e)=>{
  //   console.log("Parent Component");
  //   console.log(e);
  //   isAuth=e;
  // }
  
  const links=[
    {id:1,menu:"/dashboard",desc:"Dashboard"},
    {id:2,menu:"/view",desc:"View"},
    {id:3,menu:"/edit",desc:"Edit"},
   // {id:4,menu:"/edit/edituser/:id",desc:"EditUser"},
  ];
  const isAuth=true;
 // const url="http://localhost:3000";
  return (
    <div>

      <Router>
      <div className="App">
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/home">Student</Navbar.Brand>
        <Nav className="mr-auto" >
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/login" >Login</Nav.Link>
          {isAuth &&
          links.map((x) => {
            return (
                <Nav.Link key={x.id} href={x.menu}>{x.desc}</Nav.Link>
            );
          })}
          {/* <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/view">View</Nav.Link>
          <Nav.Link href="/edit">Edit</Nav.Link> */}
         </Nav>  
      </Navbar> 
    
        <Switch>
          <Route path="/home" exact component={Home}/>
          <Route path="/login" exact component={Login} ></Route> 
          <Route path="/error" exact component={Error}/>
          <PrivateRoute path="/dashboard" flag={isAuth} exact component={Dashboard}/>
          <PrivateRoute path="/view" flag={isAuth}  exact component={View}/>
          <PrivateRoute path="/edit" flag={isAuth}  exact component={Edit}/>
          <PrivateRoute path="/edit/edituser/:id" flag={isAuth}  exact component={Edituser}/>
        </Switch>
        {/* <Login onUserAdd={handleUserAdd}/> */}
    </div>
    </Router>
    </div>
  );
}

export default App;
