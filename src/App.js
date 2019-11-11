import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import fire from './config/Firebase.js';
import Navbar from './NavbarComponent/NavbarComponent.js';
import AddNotes from './NotesComponent/AddNotesComponent.js';
import Login from './LoginComponent/LoginComponent';
import Register from './RegisterComponent/RegisterComponent.js';
// import AllNotes from './NotesComponent/AllNotes.js';
import ShowNotes from './NotesComponent/ShowNotesComponent.js'

class App extends Component {
  state = {
    user: {}
  }
  
  componentDidMount() {
    this.authListener();
  }

  authListener = () => {
    fire.auth().onAuthStateChanged( user => {
      if(user) {
        this.setState({ user })
        console.log(user.email);
      } else {
        this.setState({ user: null });
        console.log("no user");
      }
    })  
  } 

  render() {    
    
    // let Tasks = null;
    // if(this.state.showTasks) {
    //   Tasks = (
    //     <div>
    //       { 
    //         this.state.notes.map((note, index) => {
    //           return (
    //             <AllNotes />
    //           );
    //         })
    //       }
    //     </div>
    //   )
    // }
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <Route path="/notes" component={ShowNotes}/>
          {/* <ShowNotes/> */}
          {/* <AddNotes /> */}
          {/* <AllNotes /> */}
          {/* <Login/> */}
          {/* <Register/> */}
          {/* {Tasks} */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
