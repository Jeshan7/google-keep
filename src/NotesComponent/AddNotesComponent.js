import React, { useState } from 'react';
import { Card, Button, Container,  InputGroup, Form } from 'react-bootstrap';
import fire from '../config/Firebase.js';
// import { firestore } from 'firebase';

const addNotes = () => {
  const [title, setTitle ] = useState('');
  const [content, setContent] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
   

    fire.firestore().collection('notes').add({
      title: title,
      content: content
    })
    setTitle('');
    setContent('');  
  }

  return(
    <div>
      <Container>  
        <Card bg="light" style={{ width: '18rem'}}>
          <Form onSubmit={submitHandler}>
            <Form.Control
              type="text"
              id="title"
              placeholder="title"
              onChange={e => setTitle(e.target.value)}
            />

            <Form.Control
              type="text"
              id="content"
              placeholder="Content"
              onChange={e => setContent(e.target.value)}
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