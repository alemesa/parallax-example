import React, { Component } from 'react';
import Parallax from './Parallax/Parallax';
import Content from './Content/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Parallax />
        <Content />
      </div>
    );
  }
}

export default App;
