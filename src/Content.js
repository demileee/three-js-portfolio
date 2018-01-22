import React, { Component } from 'react';
import Typist from 'react-typist';
import classNames from 'classnames';
import 'animate.css';
import './App.css';

export default class Content extends Component {
  constructor(props, context) {
    super(props, context);

    this.content = this.content.bind(this)

  };

  content() {
    const skills = this.props.skills
    const skillsList = skills.map((skill) => {
      return <li>{skill}</li>;
    })

    const isMobile = this.props.isMobile || window.outerWidth < 768

    const homeClasses = classNames({
      'home': !isMobile,
      'home-mobile': isMobile,
      'moveUpHome': this.props.scrollPosition >= 20 && !isMobile,
      'moveUpHome-mobile': this.props.scrollPosition >= 20 && isMobile,
      'animated': true,
      'fadeInLeft': this.props.scrollPosition < 20,
    })

    const aboutProjectClasses = classNames({
      'about-projects-container': !isMobile,
      'about-projects-container-mobile': isMobile,
      'visible': this.props.scrollPosition >=20,
      'animated': this.props.scrollPosition >=20,
      'fadeInUp': this.props.scrollPosition >=20,
      'moveUpAbout': this.props.scrollPosition >= 20 && !isMobile,
      'moveUpAbout-mobile': this.props.scrollPosition >= 20 && isMobile,
    })

    const aboutBox = classNames({
      'about-box': this.props.scrollPosition >= 20 && !isMobile,
      'about-box-mobile': this.props.scrollPosition >= 20 && isMobile,
    })

    const projectsBox = classNames({
      'projects-box': true,
    })

    const customTypist = classNames({
      'custom-typist': true,
      'Typist': true,
    })

    const social = classNames({
      'social': true,
      'visible': this.props.scrollPosition >=20,
      'animated': this.props.scrollPosition >=20,
      'fadeInUp': this.props.scrollPosition >=20,
    })

    const underline = classNames({
      'underline': true
    })

    const highlight = classNames({
      'highlight': true
    })

    return (
      <div>
        <div className={homeClasses}>
          <div className={social}>
            <ul>
              <li><a href="https://linkedin.com/in/demi-lee">LinkedIn</a></li>
              <li><a href="https://github.com/demileee">GitHub</a></li>
            </ul>
          </div>

          <Typist className={customTypist} cursor={{ hideWhenDone: true }}>
            <Typist.Delay ms={500} />
              <h1>Hi, I{`'`}m Demi.</h1>
            <Typist.Delay ms={500} />
              full-stack developer
            <Typist.Delay ms={500} />
          </Typist>
        </div>

        <div className={aboutProjectClasses}>
          <div className={aboutBox}>
            <h1>Currently, I{`'`}m in <span className={highlight}>Toronto</span> designing <span className={underline}>full-stack</span> web application solutions.</h1>
            <br />
            <ul>{ skillsList }</ul>
          </div>

          <div className={projectsBox}>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return(
      <div>
        {this.content()}
      </div>
    )
  };
}
