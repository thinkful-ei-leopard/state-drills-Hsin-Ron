import React from 'react';

export default class Bomb extends React.Component {
    state = {
        count: 0
    };
    
    render() {
        return (
            <div>
                <p>Tick tock or boom should be here</p>
            </div>
        );
    };

    componentDidMount() {
        // When the component mounts, 
        // register an interval that adds 1 to the count in state every second.
        this.interval = setInterval(() => {
            console.log(this.state.count);

            this.setState({
                count: this.state.count + 1
            })
        }, 1000)

    };

    componentWillUnmount() {
        clearInterval(this.interval)
    }
}