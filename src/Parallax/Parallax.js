import React, { Component } from 'react';
import './Parallax.scss';

class Parallax extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.addEventListener('scroll', function(e) {
      const layers = Array.from(document.querySelectorAll('.parallax-layer'));
      let topDistance = window.pageYOffset;

      layers.forEach(layer => {
        let speed = layer.getAttribute('data-speed');
        let movement = -((topDistance * speed) / 100);
        layer.style.transform = `translateY(${movement}px)`;
      });
    });
  }

  render() {
    return (
      <div className="Parallax" ref={c => (this.container = c)}>
        <div className="parallax-layer" id="layer-0" data-speed="2" />
        <div className="parallax-layer" id="layer-1" data-speed="5" />
        <div className="parallax-layer" id="layer-2" data-speed="11" />
        <div className="parallax-layer" id="layer-3" data-speed="16" />
        <div className="parallax-layer" id="layer-4" data-speed="26" />
        <div className="parallax-layer" id="layer-5" data-speed="36" />
        <div className="parallax-layer" id="layer-6" data-speed="49" />
        <div className="parallax-layer" id="layer-7" data-speed="69" />
        <div className="parallax-layer" id="layer-8" data-speed="100" />
      </div>
    );
  }
}

export default Parallax;
