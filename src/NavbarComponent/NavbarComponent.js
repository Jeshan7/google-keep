import React from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import fire from '../config/Firebase.js';

const navbar = (props) => {
  const click = () => {
    fire.auth().signOut();
  }
  return(
    <div>
      <Navbar bg="primary" expand="lg">
        <Navbar.Brand>Google keep</Navbar.Brand> 
          <Nav className="mr-auto">
            <Nav.Link href="register">Register</Nav.Link>
            <Nav.Link href="login">Login</Nav.Link>
            <Button variant="outline-light" onClick={click}> logout </Button>
            {/* <Button variant="outline-light" onClick={props.click}> Login </Button> */}
          </Nav>
      </Navbar>
    </div>
  );
}

export default navbar;