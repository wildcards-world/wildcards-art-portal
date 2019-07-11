import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem'
import './App.css';

//props are properties to pass props into our different componenets

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <UserItem/>
      </div>
    );
  }
}

export default App;
