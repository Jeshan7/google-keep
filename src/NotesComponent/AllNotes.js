import React, { Component } from 'react';
import fire from '../config/Firebase.js';
import { CardColumns, Card, Container } from 'react-bootstrap';
import Notes from './Notes.js';
import UpdateNotes from './UpdateNotesComponent.js';

class AllNotes extends Component {  
  state = {
    note: [
      //{key: null, title: null, content: null}
    ],
    currentTitle: null,
    currentContent: null,
    showNotes: false,
    noteKey: null,
    showModal: false
  }

  componentDidMount = () => {
    this.getAllNotes();
  }

  getAllNotes = () => {
    fire.firestore().collection('notes').onSnapshot
      ( (snapshot) => {
        let notesDoc = [];
        var querySnapshot =  snapshot.docs;
        
        querySnapshot.forEach( doc => {
          const { content, title } = doc.data();
          notesDoc.push({
            key: doc.id,
            doc,
            content,
            title
          })
          // console.log(doc.data());
          
        })

        this.setState({ note: notesDoc });
        this.setState({ showNotes: true });
        // console.log(this.state); 
      })  
  }

  clickHandler = (e, currentNote) => {
    // console.log(currentNote);
     this.setState({ currentTitle: currentNote.title, currentContent: currentNote.content, noteKey: currentNote.key, showModal: true});   
  }
  
  hideModalHandler = () => {
    this.setState({ showModal: false });
  }

  // fire.firestore().collection('notes').doc(this.state.noteKey).get()
  //        .then( (snapshot) => {
  //          console.log(snapshot.docs);
  // }) 
  
  tHandler = (e) => {
    // setTitle(e.target.value)
    this.setState({currentTitle: e.target.value})
  }
  
  cHandler = (e) => {
    // setTitle(e.target.value)
    this.setState({currentContent: e.target.value})
  }

  uHandler = () => {
    fire.firestore().collection('notes').doc(this.state.noteKey).update({
      content: this.state.currentContent,
      title: this.state.currentTitle  
    })
  }
  
  render() {
    let notes = null;
    // let modal = null;

    // if(this.state.showModal){
    //   console.log(this.state);

    // }
    

    if(this.state.showNotes) {
      notes = (
        <div>
          {
           this.state.note.map((note, index) => {
             return < Notes
                        noteTitle = {note.title}
                        noteContent = {note.content} 
                        key={note.key}
                        click = {e => this.clickHandler(e, note)}
                    />
           }) 
          }
        </div>
      )  
    }
    // console.log(this.state);

    return (
      <div>             
        <Container>
          <CardColumns>
            {notes}
          </CardColumns>
          <UpdateNotes 
            hideClick={this.hideModalHandler}
            show={this.state.showModal}
            noteId={this.state.noteKey}
            noteTitle = {this.state.currentTitle}
            noteContent = {this.state.currentContent} 
            titleHandler = {this.tHandler}
            contentHandler = {this.cHandler}
            updateHandler = {this.uHandler}
          />
        </Container>  
      </div>    
    );
  }
}

export default AllNotes;