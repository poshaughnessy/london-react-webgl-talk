import React from 'react';
import ReactTHREE from 'react-three';
import THREE from 'three';

class SkinnedComponent extends React.Component {

    constructor() {

        this.displayName = 'Skinned';

        let loader = new THREE.JSONLoader();

        loader.load('/models/skinned/model.js', (geometry, materials) => {

            console.log('Loaded skinned model', geometry, materials);

            this.geometry = geometry;
            this.material = new THREE.MeshFaceMaterial( materials );

        });

    }

    render() {

        // Can't create a SkinnedMesh until we have a geometry & material?
        if( this.geometry ) {

            return React.createElement( ReactTHREE.SkinnedMesh, {
                geometry: this.geometry,
                material: this.material,
                position: this.props.position || new THREE.Vector3(0,0,0),
                scale: 4.0
            });

        } else {

            return React.createElement( ReactTHREE.Object3D, {});

        }


    }

}

SkinnedComponent.propTypes = {
    position: React.PropTypes.instanceOf(THREE.Vector3)
};

export default SkinnedComponent;
