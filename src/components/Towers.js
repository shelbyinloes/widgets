import React, {Component} from "react";


class Towers extends Component {

  state = {
    stacks: {
      a: [4, 3, 2, 1],
      b: [],
      c: []
    }, 
    startStack: null,
    error: ''
  };

  renderRings(letter) {
    const stack = this.state.stacks[letter]
    return stack.map((ringStack, index) => {
      return <p key={index}>{ringStack}</p>
    })
  }

  isValidMove(endStackLetter){
    const endStack = this.state.stacks[endStackLetter];

    if(endStack.length){
      const startStack = this.state.stacks[this.state.startStack];
      const startStackLastItem = startStack[startStack.length - 1];
      const endStackLastItem = endStack[endStack.length - 1];

      return startStackLastItem < endStackLastItem
    }
    return !endStack.length
  }

  handleUserClick=(stack)=>{

    if(!this.state.startStack){
      this.setState({startStack: stack})
    }else{
      if(this.isValidMove(stack)){
        const endStackLetter = stack;
        const newStartStack = [...this.state.stacks[this.state.startStack]];
        const poppedPiece = newStartStack.pop();
        const newEndStack = [...this.state.stacks[endStackLetter]];
        newEndStack.push(poppedPiece);
        const newStacks = this.state.stacks;
        newStacks[this.state.startStack] = newStartStack;
        newStacks[endStackLetter] = newEndStack;
        this.checkForWin(newStacks);
        this.setState({stacks: newStacks, error: '', startStack: null});
      }else{
        this.setState({error: 'Illegal move, click a valid location'})
      }
    }
  }

  checkForWin(newStacks){
    console.log(newStacks.a.length)
    if(newStacks.b.length === 4 || newStacks.c.length === 4){
      alert("you win!")
    }
  }


  renderStacks(){
    return Object.keys(this.state.stacks).map((stack, index) => {
      return (
        <div key="index" onClick={() => this.handleUserClick(stack)}>
          Stack {stack} {this.renderRings(stack)}
        </div>
      )
    })
  }

  render(){
    const stackStyle ={
      display: 'flex',
      justifyContent: 'space-around'
    }

    return(
      <div style={stackStyle}>
      <h1>Towers of Hanoi</h1>
        {this.renderStacks()}
        <div>
          {this.state.error}
          Current Stack: {this.state.startStack}
        </div>
      </div>
    )
  }
}

  export default Towers;