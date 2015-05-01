import React from 'react';
import BaseSlideComponent from './base-slide';

export default class SlideComponent extends BaseSlideComponent {

    render() {

        return (
            <div className={this._getSlideClassName()}>
                <div className="contents">
                    <h2>Project Apoc</h2>
                    <img src="/images/project-apoc-screengrab.png" width="80%" alt="Project Apoc screenshot"/>
                </div>
            </div>
        );

    }

}
