import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './NavbarComponent/NavbarComponent.js';
import Notes from './NotesComponent/AddNotesComponent.js';
import Login from './LoginComponent/LoginComponent';
import Register from './RegisterComponent/RegisterComponent.js';

class App extends Component {
  // state = {
  //   showModal: false
  // }
  
  // showModalHandler = () => {
  //   this.setState({
  //     showModal: true
  //   })
  // }

  render() {
    // let person = null;
    // if(this.state.showModal){
    //   person = (
    //     <div>{
    //       <Login modalState={this.state.showModal}/>
    //     }
    //     </div> 
    //   )
      
    // }    

    return (
      <div className="App">
       <Navbar click={this.showModalHandler}/>
       {/* <Notes /> */}
       <Login/>
       <Register/>
      </div>
    );
  }
}

export default App;
