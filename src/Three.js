import React, { Component } from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';

const mainCameraName = 'mainCamera';

export default class Three extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      ...this.state,
      cubeRotation: new THREE.Euler(),
      phiLength: 0.2,
      mainCameraPosition: new THREE.Vector3(0, 0, 1.5),
      clearColor: 0x333333,
      light1Color: 0xffdddd,
      light2Color: 0xccccff
    };

    this._onAnimate = () => {
      let docHeight = document.querySelector('.container').scrollHeight
      if (this.state.phiLength < Math.PI*2) {
        this.setState({
          phiLength: ((this.props.scrollPosition / (docHeight - window.innerHeight)) * (Math.PI*2))
        })
      } else if (this.state.phiLength >= Math.PI*2) {
        this.setState({
          phiLength: Math.PI*2,
          cubeRotation: new THREE.Euler(
              this.state.cubeRotation.x + 0.004,
              this.state.cubeRotation.y + 0.004,
              0
          ),
        })
      }
    };
  };

  componentDidMount() {
    this.lightPosition1 = new THREE.Vector3(500, 500, 4000);
    this.lightPosition2 = new THREE.Vector3(-500, 500, 4000);
    this.lightTarget = new THREE.Vector3(0, 0, 1000);
  }

  componentWillUnmount() {}

  render() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    return (<React3
      mainCamera="mainCamera"
      width={width}
      height={height}
      antialias
      onAnimate={this._onAnimate}
      clearColor={this.state.clearColor}
    >
      <scene>
        <perspectiveCamera
          ref="mainCamera"
          name={mainCameraName}
          fov={75}
          aspect={width/height}
          near={0.1}
          far={1000}

          position={this.state.mainCameraPosition}
        />
        <ambientLight
            color={0xffffff}
          />
        <spotLight
          color={this.state.light1Color}
          intensity={1}
          position={this.lightPosition1}
          lookAt={this.lightTarget}
        />
        <spotLight
          color={this.state.light2Color}
          intensity={1}
          position={this.lightPosition2}
          lookAt={this.lightTarget}
        />
        <mesh
          rotation={this.state.cubeRotation}
        >
          <sphereGeometry
            widthSegments={20}
            heightSegments={20}
            phiLength={this.state.phiLength}
          />
          <meshLambertMaterial
            color={0x555555}
            wireframe={true}
            wireframeLinewidth={1}
          />
        </mesh>
      </scene>
    </React3>
  );
  };

};
