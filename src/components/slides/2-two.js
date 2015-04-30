import React from 'react';
import BaseSlideComponent from './base-slide';
import RobotDemo from '../robot-demo/robot-demo';

class Slide2Component extends BaseSlideComponent {

    render() {

        return (
            <div className={'slide ' + (this._isVisible() ? 'show' : 'hide')}>
                <RobotDemo animating={this._isVisible()}/>
                <div className="contents top">
                    <h2>Demo</h2>
                </div>
            </div>
        );

    }

}

export default Slide2Component;
