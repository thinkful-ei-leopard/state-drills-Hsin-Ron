import React from 'react';

export default class HelloWorld extends React.Component{
     state={
         who: "world"
     };
     handleClick =(event)=>{
        this.setState({
            who: event.currentTarget.textContent
        });
            
     }
     
     
    render(){
  return (
      <div>
          <p>Hello, {this.state.who} </p>
          <button onClick={this.handleClick}>Friend</button>
          <button onClick={this.handleClick}>React</button>
          <button onClick={this.handleClick}>World</button>
      </div>
  )
}
}