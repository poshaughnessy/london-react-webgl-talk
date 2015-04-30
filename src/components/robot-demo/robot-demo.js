import React from 'react';
import ReactTHREE from 'react-three';
import RobotComponent from './robot';
import THREE from 'three';

const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
const cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
const ROBOT_Z_NEAR = 50;
const ROBOT_Z_FAR = 0;
const ROBOT_MOVE_RATE = 0.1;

class RobotDemoComponent extends React.Component {

    constructor() {

        this.state = {
            robotPosition: new THREE.Vector3(0,-35,0),
            robotMovingForwards: true
        };

        this._animate = this._animate.bind(this);

    }

    componentDidMount() {
        this.rAF = requestAnimationFrame(this._animate);
    }

    componentWillUnmount() {

        if( this.rAF ) {
            cancelAnimationFrame(this.rAF);
        }

    }

    render() {

        let CameraElement = React.createElement(
            ReactTHREE.PerspectiveCamera,   // type
            {                               // config
                name: 'camera',
                fov: 75,
                aspect: window.innerWidth / window.innerHeight,
                near: 1,
                far: 1000,
                position: new THREE.Vector3(0, 0, 100),
                lookat: new THREE.Vector3(0, 0, 0)
            }
        );

        let RobotElement = React.createElement(
            RobotComponent,
            {
                position: this.state.robotPosition
            }
        );

        let AmbientLight = React.createElement(
            ReactTHREE.AmbientLight,
            {
                color: new THREE.Color(0x333333),
                intensity: 0.5,
                position: new THREE.Vector3(0, 0, 600),
                target: new THREE.Vector3(0, 0, 0)
            }
        );

        let DirectionalLight = React.createElement(
            ReactTHREE.DirectionalLight,
            {
                color: new THREE.Color(0xFFFFFF),
                intensity: 1.5,
                position: new THREE.Vector3(0, 0, 60)
            }
        );

        let SpotLight = React.createElement(
            ReactTHREE.SpotLight,
            {
                position: new THREE.Vector3(0, 0, 100)
            }
        );

        return React.createElement(
            ReactTHREE.Scene,
            {
                width: window.innerWidth,
                height: window.innerHeight,
                camera: 'camera',
                antialias: true,
                background: 0xFFFFFF
            },
            CameraElement,
            RobotElement,
            AmbientLight,
            DirectionalLight,
            SpotLight
        )
    }

    _animate() {

        if( this.props.animating ) {

            let robotZ = this.state.robotPosition.z;

            if (this.state.robotMovingForwards) {

                if (robotZ < ROBOT_Z_NEAR) {

                    let newPosition = this.state.robotPosition;
                    newPosition.z += ROBOT_MOVE_RATE;

                    this.setState({robotPosition: newPosition});

                } else {
                    this.setState({robotMovingForwards: false});
                }

            } else {

                if (robotZ > ROBOT_Z_FAR) {

                    let newPosition = this.state.robotPosition;
                    newPosition.z -= ROBOT_MOVE_RATE;

                    this.setState({robotPosition: newPosition});

                } else {
                    this.setState({robotMovingForwards: true});
                }

            }

        }

        requestAnimationFrame( this._animate );

    }

}

RobotDemoComponent.propTypes = {
    animating: React.PropTypes.bool
};

export default RobotDemoComponent;
