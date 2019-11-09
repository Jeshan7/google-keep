import React, { Component } from 'react';
import { Form, Container, Button } from 'react-bootstrap';

class Login extends Component {
  state = {
    email: null,
    password: null
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);  
  }
  
  inputHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    return (
      <div>
       <Container className="Login">
         <Form onSubmit={this.handleSubmit}>
           <Form.Group>
             <Form.Control type="text" id="email" placeholder="Email" onChange={this.inputHandler}/>
           </Form.Group>

           <Form.Group>
             <Form.Control type="password" id="password" placeholder="Password" onChange={this.inputHandler}/>
           </Form.Group>

           <Button variant="outline-primary" type="submit">Login</Button>
         </Form>
       </Container>     
      </div>    
    );    
  }
}

export default Login;