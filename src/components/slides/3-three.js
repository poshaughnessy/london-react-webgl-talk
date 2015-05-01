import React from 'react';
import BaseSlideComponent from './base-slide';
import MonsterDemo from '../demos/monster/demo';

class Slide3Component extends BaseSlideComponent {

    render() {

        return (
            <div className={'slide ' + (this._isVisible() ? 'show' : 'hide')}>
                <MonsterDemo animating={this._isVisible()}/>
                <div className="contents top">
                    <h2>Monster</h2>
                </div>
            </div>
        );

    }

}

export default Slide3Component;
