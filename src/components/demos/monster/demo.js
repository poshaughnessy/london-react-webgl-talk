import React from 'react';
import ReactTHREE from 'react-three';
import MonsterComponent from './monster';
import THREE from 'three';
import BaseAnimatingDemoComponent from '../base-animating-demo';

const MONSTER_Z_NEAR = 50;
const MONSTER_Z_FAR = 0;
const MONSTER_MOVE_RATE = 0.1;

class MonsterDemoComponent extends BaseAnimatingDemoComponent {

    constructor() {

        super();

        this.state = {
            monsterPosition: new THREE.Vector3(-20,-15,0),
            monsterMovingForwards: true
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
                position: new THREE.Vector3(0, 0, 100),
                lookat: new THREE.Vector3(0, 0, 0)
            }
        );

        let MonsterElement = React.createElement(
            MonsterComponent,
            {
                position: this.state.monsterPosition
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
            MonsterElement,
            AmbientLight,
            DirectionalLight,
            SpotLight
        )
    }

    _animate() {

        let monsterZ = this.state.monsterPosition.z;

        if (this.state.monsterMovingForwards) {

            if (monsterZ < MONSTER_Z_NEAR) {

                let newPosition = this.state.monsterPosition;
                newPosition.z += MONSTER_MOVE_RATE;

                this.setState({monsterPosition: newPosition});

            } else {
                this.setState({monsterMovingForwards: false});
            }

        } else {

            if (monsterZ > MONSTER_Z_FAR) {

                let newPosition = this.state.monsterPosition;
                newPosition.z -= MONSTER_MOVE_RATE;

                this.setState({monsterPosition: newPosition});

            } else {
                this.setState({monsterMovingForwards: true});
            }

        }

        if( this.props.animating ) {
            this._requestAnimation();
        }

    }

}

export default MonsterDemoComponent;
