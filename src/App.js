import React, { Component } from 'react';

import Calendar from './js/components/calendar'
import Header from './js/components/header'

import './sass/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Calendar />
      </div>
    );
  }
}

export default App;
