import React from 'react';
import SlideTitle from './slides/title';
import SlideApocIntro from './slides/apoc-intro';
import SlideDontDoThis1 from './slides/dont-do-this-1';
import SlideReactThreeIntro from './slides/react-three-intro';
import SlideRobot from './slides/robot';
import SlideMonster from './slides/monster';
import SlideSkinned from './slides/skinned';

const SLIDES = [
    SlideTitle,
    SlideApocIntro,
    SlideDontDoThis1,
    SlideReactThreeIntro,
    SlideRobot,
    SlideMonster,
    SlideSkinned
];

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

        let slideElements = [];

        SLIDES.forEach((slide, index) => {
            slideElements.push( React.createElement(slide, {slideNum: index+1, currentSlideNum: this.state.currentSlideNum}) );
        });

        return (
            React.createElement('div', {}, slideElements)
        );

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

        if( this.state.currentSlideNum < SLIDES.length ) {

            this.setState({currentSlideNum: this.state.currentSlideNum + 1});

        }

        console.log('this.state.currentSlideNum', this.state.currentSlideNum);
    }

}

AppComponent.propTypes = {
    initialSlideNum: React.PropTypes.number
};

export default AppComponent;
