import React from 'react';

export default class Bomb extends React.Component {
    state = {
        count: 0,
    };

    createString = () => {
        if(this.state.count >= 8){
            clearInterval(this.interval);
            return 'BOOM!!!';
        }else if (this.state.count % 2 === 0){
            return 'tick';
        }else{
            return 'tock';
        }

        // when count is event, output tick
        // when count is odd, output tock
        // when count is equal or greater to 8, output BOOM!!!
        // and also clear the interval
    }
    
    render() {
        console.log(this.state.count);
        return (
            <div>
                <p>{this.createString()}</p>
            </div>
        );
    };

    componentDidMount() {
        // When the component mounts, 
        // register an interval that adds 1 to the count in state every second.
        this.interval = setInterval(() => {

            this.setState({
                count: this.state.count + 1
            })
        }, 1000)

    };

    componentWillUnmount() {
        clearInterval(this.interval)
    }
}