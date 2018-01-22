import React, { Component } from 'react';
import './App.css';
import Content from './Content';
import Three from './Three';

export default class Container extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      scrollPosition: 0,
      isMobile: false,
    }

    this.recordScroll = this.recordScroll.bind(this);
    this.isMobile = this.isMobile.bind(this);
  };

  componentDidMount() {
    window.addEventListener('scroll', this.recordScroll);
    window.addEventListener("resize", this.isMobile);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.recordScroll);
  }

  recordScroll() {
    this.setState({
      scrollPosition: window.pageYOffset
    })
  }

  isMobile(){
    if (window.outerWidth < 768) {
      this.setState({
        isMobile: true
      })
    } else {
      this.setState({
        isMobile: false
      })
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <Content
            scrollPosition={this.state.scrollPosition}
            skills={["HTML", "CSS", "Ruby", "Ruby on Rails", "Github", "ES5/ES6", "React.js", "three.js", "AJAX", "JSON", "Unit Testing", "Team Collaboration", "Agile+Scrum", "Sketch", "Adobe Creative Suite"]}
            isMobile = {this.state.isMobile}
          />
        </div>
        <Three
          scrollPosition={this.state.scrollPosition}
        />
      </div>
    );
  };
}
