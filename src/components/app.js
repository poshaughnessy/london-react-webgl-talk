import React from 'react';
import Slide1 from './slides/1-intro';
import Slide2 from './slides/2-two';
import Slide3 from './slides/3-three';

const LAST_SLIDE_NUM = 3;

class AppComponent extends React.Component {

    constructor(props) {

        this.state = {
            currentSlideNum: props.initialSlideNum
        };

        this._onKeyUp = this._onKeyUp.bind(this);
        this._onLeft = this._onLeft.bind(this);
        this._onRight = this._onRight.bind(this);

    }

    componentDidMount() {
        document.addEventListener('keyup', this._onKeyUp);
    }

    componentWillUnmount() {
        document.removeEventListener('keyup', this._onKeyUp);
    }

    render() {
        return (
            <div>
                <Slide1 slideNum={1} currentSlideNum={this.state.currentSlideNum}/>
                <Slide2 slideNum={2} currentSlideNum={this.state.currentSlideNum}/>
                <Slide3 slideNum={3} currentSlideNum={this.state.currentSlideNum}/>
            </div>
        )
    }

    _onKeyUp(e) {

        console.log('onKeyUp', e);

        switch( e.keyCode ) {
            case 37: // left arrow
                this._onLeft();
                break;
            case 39: // right arrow
                this._onRight();
                break;
        }
    }

    _onLeft() {

        console.log('Left');

        if( this.state.currentSlideNum > 1 ) {

            this.setState({currentSlideNum: this.state.currentSlideNum - 1});

        }

        console.log('this.state.currentSlideNum', this.state.currentSlideNum);
    }

    _onRight() {

        console.log('Right');

        if( this.state.currentSlideNum < LAST_SLIDE_NUM ) {

            this.setState({currentSlideNum: this.state.currentSlideNum + 1});

        }

        console.log('this.state.currentSlideNum', this.state.currentSlideNum);
    }

}

AppComponent.propTypes = {
    initialSlideNum: React.PropTypes.number
};

export default AppComponent;
