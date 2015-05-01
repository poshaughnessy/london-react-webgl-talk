import React from 'react';

class BaseAnimatingDemoComponent extends React.Component {

    constructor() {

        this._animate = this._animate.bind(this);
        this._requestAnimation = this._requestAnimation.bind(this);
        this._cancelAnimation = this._cancelAnimation.bind(this);

    }

    componentDidMount() {
        if( this.props.animating ) {
            this._requestAnimation();
        }
    }

    componentWillUnmount() {
        this._cancelAnimation();
    }

    componentWillUpdate(nextProps) {
        if( !this.props.animating && nextProps.animating ) {
            // Kick off animation loop
            this._requestAnimation();
        } else if( this.props.animating ) {
            // Stop animation loop
            this._cancelAnimation();
        }
    }

    _requestAnimation() {
        this.rAF = requestAnimationFrame( this._animate );
    }

    _cancelAnimation() {
        if( this.rAF ) {
            cancelAnimationFrame(this.rAF);
        }
    }

}

BaseAnimatingDemoComponent.propTypes = {
    animating: React.PropTypes.bool
};

export default BaseAnimatingDemoComponent;
