import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      name: "Demi"
    };
  };

  componentDidMount() {
    // ReactDOM.findDOMNode(this.refs.body).addEventListener('scroll', this.listenScrollEvent);
    document.querySelector('body').addEventListener('scroll', this.listenScrollEvent);
  }

  listenScrollEvent() {
    console.log('Scroll event detected!');
  }

  render() {
    return (
      <div className="header">
        <p>Welcome, {this.state.name}.</p>
      </div>
    );
  };
}




export default Main;
