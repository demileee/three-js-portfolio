import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import TrackballControls from './ref/trackball';

const mainCameraName = 'mainCamera';

class Simple extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      ...this.state,
      cubeRotation: new THREE.Euler(),
      mainCameraPosition: new THREE.Vector3(0, 0, 10),
    };

    this._onAnimate = () => {
      this.controls.update();
      this.setState({
        cubeRotation: new THREE.Euler(
          this.state.cubeRotation.x + 0.01,
          this.state.cubeRotation.y + 0.01,
          0
        )
      });
    };
  }

  componentDidMount() {
    const controls = new TrackballControls(this.refs.mainCamera, ReactDOM.findDOMNode(this));

    controls.zoomSpeed = 0.2;
    controls.noZoom = false;
    controls.noPan = true;
    controls.noRotate = true;
    controls.staticMoving = true;
    controls.dynamicDampingFactor = 0.3;

    this.controls = controls;

    this.controls.addEventListener('change', () => {
      this.setState({
        mainCameraPosition: this.refs.mainCamera.position,
      })
    });
  }

  componentWillUnmount() {
    this.controls.dispose();
    delete this.controls;
  }

  render() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    return (<React3
      mainCamera="mainCamera"
      width={width}
      height={height}
      antialias
      onAnimate={this._onAnimate}
      clearColor={0xffffff}
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
        <mesh
          rotation={this.state.cubeRotation}
        >
          <boxGeometry
            width={1}
            height={1}
            depth={1}
          />
          <meshBasicMaterial
            color={0x00ff00}
          />
        </mesh>
      </scene>
    </React3>
  );
  };

};

export default Simple;
