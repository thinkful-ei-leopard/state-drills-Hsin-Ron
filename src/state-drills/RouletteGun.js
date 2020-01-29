import React from 'react';


// 6) The component will accept a prop called bulletInChamber that has a default value of 8.

// 7) When the user clicks the button, there should be a click event handler. The following steps should be in the handler:
// The state should update spinningTheChamber to be true.
// A timeout should be registered for 2 seconds.
// Within the timeout, a random number between 1 and 8 should be generated.
// Within the timeout, the state should be updated so that the generated random number is the new value for chamber and spinningTheChamber should be false.

// 8) The component should render the content of the p element according to the following rules:
// If spinningTheChamber is true, render spinning the chamber and pulling the trigger! ....
// If the chamber value in state is the same as the bulletInChamber value in props, render BANG!!!!.
// Otherwise, render you're safe!!

// 9) If the component is to be unmounted, clear the timeout.

export default class RouletteGun extends React.Component {


    state = {
        chamber: null,
        spinningTheChamber: false
    };
    
    handleClick = () => {
        this.setState({
            spinningTheChamber: true
        })

        setTimeout(this.loadGun(), 2000);
  
    }

    loadGun() {
        // This is to be used by timeout
        // it creates a random number between 1 and 8 (ie spinning the chamber)
        // and sets the state to that random number

        this.setState({
            chamber: Math.ceil(Math.random() * 8),
            spinningTheChamber: false
        })
    }

    render() {
        console.log(this.state.chamber);
        return (
            <div>
                <p>{this.props.bulletInChamber}VARIABLE TEXT GOES HERE</p>
                <button onClick={this.handleClick}>Pull the trigger!</button>

            </div>
        );
    }
}