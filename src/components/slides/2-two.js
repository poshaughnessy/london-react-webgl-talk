import React from 'react';
import BaseSlideComponent from './base-slide';

class Slide2Component extends BaseSlideComponent {

    render() {

        return (
            <div className={'slide ' + (this.isVisible() ? 'show' : 'hide')}>
                Slide TWO!
            </div>
        );

    }

}

export default Slide2Component;
