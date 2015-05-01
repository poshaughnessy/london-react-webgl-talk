import React from 'react';

class BaseSlideComponent extends React.Component {

    constructor() {
        this._isVisible = this._isVisible.bind(this);
    }

    _isVisible() {
        return this.props.currentSlideNum === this.props.slideNum
    }

    _getSlideClassName() {
        return 'slide ' + (this._isVisible() ? 'show' : 'hide');
    }

}

BaseSlideComponent.propTypes = {
    currentSlideNum: React.PropTypes.number,
    slideNum: React.PropTypes.number
};

export default BaseSlideComponent;
