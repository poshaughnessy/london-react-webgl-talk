import React from 'react';
import BaseSlideComponent from './base-slide';

class Slide1Component extends BaseSlideComponent {

    render() {

        return (
            <div className={'slide ' + (this._isVisible() ? 'show' : 'hide')}>
                <h1>2D + 3D Web Apps: Combining React &amp; WebGL</h1>
                <p>Peter O'Shaughnessy</p>
            </div>
        );

    }

}

export default Slide1Component;
