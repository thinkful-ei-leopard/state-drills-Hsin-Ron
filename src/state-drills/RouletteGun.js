import React from 'react';

export default class RouletteGun extends React.Component {


    state = {
        chamber: null,
        spinningTheChamber: false
    };
    
    handleClick = () => {
        this.setState({
            spinningTheChamber: true
        })

        this.timeout = setTimeout(() => {
            const randomChamber = Math.ceil(Math.random() * 8)
      
            this.setState({
              chamber: randomChamber,
              spinningTheChamber: false,
            })
          }, 2000)

  
    }

    
    checkSpinning(){
        if(this.state.spinningTheChamber===true){
            return 'spinning the chamber and pulling the trigger! ...';
        }else if(this.state.chamber === this.props.bulletInChamber){
            return 'BANG!!!!';
        }else{
            return 'you are safe!';
        }
        
    }
    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    render() {
        console.log(this.state.chamber);
        return (
            <div>
                <p>{this.checkSpinning()}</p>
                <button onClick={this.handleClick}>Pull the trigger!</button>

            </div>
        );
    }
}