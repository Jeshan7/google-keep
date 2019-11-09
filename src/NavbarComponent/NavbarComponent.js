import React from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';

const navbar = (props) => {
  return(
    <div>
      <Navbar bg="primary" expand="lg">
        <Navbar.Brand>Google keep</Navbar.Brand> 
          <Nav>
            {/* <Button variant="outline-light" onClick={props.click}> Register </Button> */}
            <Button variant="outline-light" onClick={props.click}> Login </Button>
          </Nav>
      </Navbar>
    </div>
  );
}

export default navbar;