import React from 'react';
import BaseSlideComponent from './base-slide';
import RobotDemo from '../demos/robot/demo';

export default class SlideComponent extends BaseSlideComponent {

    render() {

        return (
            <div className={this._getSlideClassName()}>
                <RobotDemo animating={this._isVisible()}/>
                <div className="contents top">
                    <h2>Robot</h2>
                </div>
            </div>
        );

    }

}
