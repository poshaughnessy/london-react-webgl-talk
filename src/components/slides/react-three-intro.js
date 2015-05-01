import React from 'react';
import BaseSlideComponent from './base-slide';

export default class SlideComponent extends BaseSlideComponent {

    render() {

        return (
            <div className={this._getSlideClassName()}>
                <div className="contents">
                    <h2>react-three</h2>
                    <p><a href="https://github.com/Izzimach/react-three">github.com/Izzimach/react-three</a></p>
                </div>
            </div>
        );

    }

}
