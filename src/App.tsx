import React, { Component } from 'react';
import FetchComp from './components/FetchComp';
import User from './components/User';
import Modal from './components/Modal';
import Hello from './components/Hello';
import './App.css';

export interface AppProps {}

export interface AppState {
  count: number;
}

class App extends Component<AppProps, AppState> {
  render() {
    return (
      <div className='App'>
        <Hello />
        {/* <Modal /> */}
        {/* <FetchComp /> */}
        {/* <User /> */}
      </div>
    );
  }
}

export default App;
