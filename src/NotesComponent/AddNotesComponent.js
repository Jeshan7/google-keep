import React, { Component } from 'react';
import { Card, Button, Container,  InputGroup, FormControl } from 'react-bootstrap';

class Notes extends Component {
  render() {
    return(
      <div>
        <Container>  
          <Card bg="light" style={{ width: '18rem'}}>
            <InputGroup>
              <FormControl
                type="text"
                placeholder="note"
              />
            </InputGroup>
            <Card.Body>
            </Card.Body>   
          </Card>
        </Container>
      </div>
    );    
  }    
}

export default Notes;