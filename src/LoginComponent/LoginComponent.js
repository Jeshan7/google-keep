import React, { Component } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import fire from '../config/Firebase.js';

class Login extends Component {
  state = {
    email: null,
    password: null
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then( cred => {
        console.log(cred.user.email);
        this.props.history.push("/notes");
      })
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