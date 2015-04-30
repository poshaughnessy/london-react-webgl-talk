import React from 'react';
import Slide1 from './slides/1-intro';
import Slide2 from './slides/2-two';

class AppComponent extends React.Component {

    constructor(props) {

        this.state = {
            currentSlideNum: props.initialSlideNum
        };

        this.onKeyUp = this.onKeyUp.bind(this);
        this.onLeft = this.onLeft.bind(this);
        this.onRight = this.onRight.bind(this);

    }

    componentDidMount() {
        document.addEventListener('keyup', this.onKeyUp);
    }

    componentWillUnmount() {
        document.removeEventListener('keyup', this.onKeyUp);
    }

    render() {
        return (
            <div>
                <Slide1 slideNum={1} currentSlideNum={this.state.currentSlideNum}/>
                <Slide2 slideNum={2} currentSlideNum={this.state.currentSlideNum}/>
            </div>
        )
    }

    onKeyUp(e) {

        console.log('onKeyUp', e);

        switch( e.keyCode ) {
            case 37: // left arrow
                this.onLeft();
                break;
            case 39: // right arrow
                this.onRight();
                break;
        }
    }

    onLeft() {

        console.log('onLeft');

        if( this.state.currentSlideNum > 1 ) {

            console.log('Decrement from ' + this.state.currentSlideNum + ' to ' + (this.state.currentSlideNum - 1));

            this.setState({currentSlideNum: this.state.currentSlideNum - 1});

            console.log('this.state.currentSlideNum', this.state.currentSlideNum);

        }

        console.log('this.state.currentSlideNum', this.state.currentSlideNum);
    }

    onRight() {

        console.log('onRight');

        if( this.state.currentSlideNum < 2 ) { // TODO max slides num

            this.setState({currentSlideNum: this.state.currentSlideNum + 1});

        }

        console.log('this.state.currentSlideNum', this.state.currentSlideNum);
    }

}

AppComponent.propTypes = {
    initialSlideNum: React.PropTypes.number
};

export default AppComponent;
