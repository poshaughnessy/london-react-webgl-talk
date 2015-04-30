import React from 'react';
import AppComponent from './components/app';
import THREE from 'three';

//function animate() {

    React.render(
        React.createElement( AppComponent, {initialSlideNum: 1} ), // Later we might initialise slide num from URL hash etc.
        document.getElementById('app')
    );

    //requestAnimationFrame(animate);
//}

//animate();
