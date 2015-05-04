import React from 'react';
import AppComponent from './components/app';
import THREE from 'three';

let appProps = {
    initialSlideNum: 1  // Later we might initialise initialSlideNum from URL hash etc.
};

React.render(
    React.createElement( AppComponent, appProps ),
    document.getElementById('app')
);
