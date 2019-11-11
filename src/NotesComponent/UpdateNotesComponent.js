import React, { useState, Component } from 'react';
import fire from '../config/Firebase.js';
import { Modal, Button, InputGroup, Form } from 'react-bootstrap';

// const updateNotes = (props) => {
class UpdateNotes extends Component {  

  
  
  
  render() {
  return (
    <div>
      <Modal show={this.props.show}
             size="lg"
             aria-labelledby="contained-modal-title-vcenter"
             centered
        >
        <Modal.Header>
        {/* {props.noteId}
        {props.noteTitle}
        {props.noteContent} */}
          <Form.Control type="text" id="title" onChange={this.props.titleHandler} value={this.props.noteTitle}/>
        </Modal.Header>
        <Modal.Body>
           <Form.Control type="text" id="content" onChange={this.props.contentHandler} value={this.props.noteContent} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick = {this.props.hideClick}>close</Button>
          <Button variant="outline-danger" onClick = {this.props.updateHandler}>Update</Button>
        </Modal.Footer> 
      </Modal>
    </div>    
  );
  }
}

export default UpdateNotes;