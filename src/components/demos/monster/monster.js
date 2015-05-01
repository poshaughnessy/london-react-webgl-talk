import React from 'react';
import ReactTHREE from 'react-three';
import THREE from 'three';

class MonsterComponent extends React.Component {

    constructor() {

        this.displayName = 'Monster';

        let loader = new THREE.JSONLoader();

        console.log('Loading...');

        loader.load('/models/monster/monster.js', (geometry, materials) => {

            console.log('Loaded!', geometry, materials);

            this.geometry = geometry;
            this.material = materials[0];

        });

    }

    render() {

        return React.createElement(
            ReactTHREE.Object3D,
            {},
            React.createElement( ReactTHREE.Mesh, {
                geometry: this.geometry,
                material: this.material,
                position: this.props.position || new THREE.Vector3(0,0,0),
                scale: 0.03
            })
        );

    }

}


console.log('THREE', THREE);


MonsterComponent.propTypes = {
    position: React.PropTypes.instanceOf(THREE.Vector3)
};

export default MonsterComponent;
