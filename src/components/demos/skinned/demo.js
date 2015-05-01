import React from 'react';
import ReactTHREE from 'react-three';
import SkinnedComponent from './skinned';
import THREE from 'three';
import BaseAnimatingDemoComponent from '../base-animating-demo';

const SKINNED_Z_NEAR = 50;
const SKINNED_Z_FAR = 0;
const SKINNED_MOVE_RATE = 0.1;

class SkinnedDemoComponent extends BaseAnimatingDemoComponent {

    constructor() {

        super();

        this.state = {
            skinnedPosition: new THREE.Vector3(0,-10,0),
            skinnedMovingForwards: true
        };

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
                position: new THREE.Vector3(0, 10, 100),
                lookat: new THREE.Vector3(0, 0, 0)
            }
        );

        let SkinnedElement = React.createElement(
            SkinnedComponent,
            {
                position: this.state.skinnedPosition
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
                intensity: 0.3,
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
            SkinnedElement,
            AmbientLight,
            DirectionalLight,
            SpotLight
        )
    }

    _animate() {

        let skinnedZ = this.state.skinnedPosition.z;

        if (this.state.skinnedMovingForwards) {

            if (skinnedZ < SKINNED_Z_NEAR) {

                let newPosition = this.state.skinnedPosition;
                newPosition.z += SKINNED_MOVE_RATE;

                this.setState({skinnedPosition: newPosition});

            } else {
                this.setState({skinnedMovingForwards: false});
            }

        } else {

            if (skinnedZ > SKINNED_Z_FAR) {

                let newPosition = this.state.skinnedPosition;
                newPosition.z -= SKINNED_MOVE_RATE;

                this.setState({skinnedPosition: newPosition});

            } else {
                this.setState({skinnedMovingForwards: true});
            }

        }

        if( this.props.animating ) {
            this._requestAnimation();
        }

    }

}

export default SkinnedDemoComponent;
