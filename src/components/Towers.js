import React, {Component} from "react";


class Towers extends Component {

  state = {
    stacks: {
      a: [4, 3, 2, 1],
      b: [],
      c: []
    }, 
    userClick: 0
  };

  renderRings(letter) {
    const stack = this.state.stacks[letter]
    return stack.map((ringStack, index) => {
      return <p key={index}>{ringStack}</p>
    })
  }

  handleUserClick=(stack)=>{
    console.log("here", stack)
  }

  render(){
    const stackStyle ={
      display: 'flex',
      justifyContent: 'space-around'
    }

    return(
      <div style={stackStyle}>
      <h1>Towers of Hanoi</h1>
        <div onClick={() => this.handleUserClick('a')}>Stack A {this.renderRings('a')}</div>
        <div onClick={() => this.handleUserClick('b')}>Stack B {this.renderRings('b')}</div>
        <div onClick={() => this.handleUserClick('c')}>Stack C {this.renderRings('c')}</div>
      </div>
    )
  }
}

  export default Towers;