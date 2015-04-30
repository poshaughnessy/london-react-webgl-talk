import React from 'react';

class SlideComponent extends React.Component {

    constructor() {
        this._isVisible = this._isVisible.bind(this);
    }

    _isVisible() {
        return this.props.currentSlideNum === this.props.slideNum
    }

}

SlideComponent.propTypes = {
    currentSlideNum: React.PropTypes.number,
    slideNum: React.PropTypes.number
};

export default SlideComponent;
