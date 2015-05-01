import React from 'react';
import BaseSlideComponent from './base-slide';
import SkinnedDemo from '../demos/skinned/demo';

export default class SlideComponent extends BaseSlideComponent {

    render() {

        return (
            <div className={this._getSlideClassName()}>
                <SkinnedDemo animating={this._isVisible()}/>
                <div className="contents top">
                    <h2>Skinned</h2>
                </div>
            </div>
        );

    }

}
