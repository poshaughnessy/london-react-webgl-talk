import React from 'react';
import BaseSlideComponent from './base-slide';
import MonsterDemo from '../demos/monster/demo';

export default class SlideComponent extends BaseSlideComponent {

    render() {

        return (
            <div className={this._getSlideClassName()}>
                <MonsterDemo animating={this._isVisible()}/>
                <div className="contents top">
                    <h2>Monster</h2>
                </div>
            </div>
        );

    }

}
