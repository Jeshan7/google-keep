import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Notes = (props) => {
  return (
    <div>
      <Card>
        <Card.Title>{props.noteTitle}</Card.Title>
        <Card.Body>{props.noteContent}</Card.Body>
        <Button variant="outline-primary" onClick={props.click}>Edit</Button>
        <Button variant="outline-primary">Delete</Button>
        <Button variant="outline-primary">Add Image</Button>
      </Card>        
    </div>    
  );
}

export default Notes;