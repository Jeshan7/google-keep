import React, { useState } from 'react';
import { Card, Button, Container,  InputGroup, Form } from 'react-bootstrap';

const addNotes = ({ notes, index}) => {
  const [title, setTitle ] = useState('');
  const [content, setContent] = useState('');
  
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("hello");
  }
  return(
    <div>
      <Container>  
        <Card bg="light" style={{ width: '18rem'}}>
          <Form onSubmit={submitHandler}>
            <Form.Control
              type="text"
              id="note"
              placeholder="note"
              onChange={e => setTitle(e.target.value)}
            />
            <Button variant="outline-primary" type="submit">ADD</Button>
          </Form>
          <Card.Body>
          </Card.Body>   
        </Card>
      </Container>
    </div>
  );        
}

export default addNotes;