import React from 'react'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function Navgiation() {
    return (
        <div>
        <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Student View</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#dashboard">Dashboard</Nav.Link>
          <Nav.Link href="#studentList">Student List</Nav.Link>
          <Nav.Link href="#editstudent">Edit Student</Nav.Link>
        </Nav>      
  </Navbar> 
 </div>
    )
}
