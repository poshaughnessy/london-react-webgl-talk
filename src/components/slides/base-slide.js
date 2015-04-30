import React from 'react';

class SlideComponent extends React.Component {

    constructor() {
        this.isVisible = this.isVisible.bind(this);
    }

    isVisible() {
        return this.props.currentSlideNum === this.props.slideNum
    }

}

SlideComponent.propTypes = {
    currentSlideNum: React.PropTypes.number,
    slideNum: React.PropTypes.number
};

export default SlideComponent;
