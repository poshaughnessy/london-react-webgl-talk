import React from 'react';
import BaseSlideComponent from './base-slide';

class Slide1Component extends BaseSlideComponent {

    render() {

        return (
            <div className={'slide ' + (this._isVisible() ? 'show' : 'hide')}>
                <div className="contents">
                    <h1>Combining React &amp; Three.js</h1>
                    <h2>for 2D + 3D Web Apps</h2>
                    <p>Peter O'Shaughnessy</p>
                </div>
            </div>
        );

    }

}

export default Slide1Component;
