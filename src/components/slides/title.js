import React from 'react';
import BaseSlideComponent from './base-slide';

export default class SlideComponent extends BaseSlideComponent {

    render() {

        return (
            <div className={this._getSlideClassName()}>
                <div className="contents">
                    <h1>Combining React &amp; Three.js</h1>
                    <h2>for 2D + 3D Web Apps</h2>
                    <p>Peter O'Shaughnessy</p>
                </div>
            </div>
        );

    }

}
