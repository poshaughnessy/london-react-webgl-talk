import React from 'react';
import BaseSlideComponent from './base-slide';

class Slide1Component extends BaseSlideComponent {

    render() {

        return (
            <div className={'slide ' + (this.isVisible() ? 'show' : 'hide')}>
                Slide 1!
            </div>
        );

    }

}

export default Slide1Component;
