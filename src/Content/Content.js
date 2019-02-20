import React, { Component } from 'react';
import './Content.scss';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Content" ref={c => (this.container = c)}>
        <h2>Available now for $19.99</h2>
      </div>
    );
  }
}

export default Content;
