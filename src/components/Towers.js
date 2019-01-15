import React, {Component} from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import Popup from 'reactjs-popup';


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
    return stack.map((ringStack) => {
      return <p 
        style={{
          backgroundColor: "#074A54", 
          border: "1px", 
          color: 'white',
          borderColor: 'grey', 
          borderRadius: '2px'}}
        key={ringStack.toString()}
        value={ringStack}
      >{ringStack}</p>
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
        this.setState({error: 'Illegal move, try again'})
        this.setState({startStack: null})
      }
    }
  }

  checkForWin(newStacks){
    if(newStacks.b.length === 4 || newStacks.c.length === 4){
      alert("you win!")
    }
  }


  renderStacks(){
    return Object.keys(this.state.stacks).map((stack, index) => {
      return (
        <div key={index} onClick={() => this.handleUserClick(stack)}>
          <h3> Stack {stack.toUpperCase()}</h3> <h4>{this.renderRings(stack)}</h4>
        </div>
      )
    })
  }

  showCurrentRing() {
    if(!this.state.startStack){
      return '';
    }else{
      // const thisStack = this.state.startStack;
      // console.log(thisStack)
      return this.state.startStack[this.state.startStack.length - 1]
    }
  }

  resetGame = (stacks) => {
      this.setState({stacks: {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      }, error: '', startStack: null})
  }

  render(){
    const stackStyle = {
      display: 'flex',
      justifyContent: 'space-around',
      fontSize: '20px',
      height: '150px'
    }

    const towers = {
      border: '2px solid black',
      paddingBottom: '30px'
    }

    return(
      <Grid>
        <Col md={7} style={towers}>
        <Row>
          <h1>Towers of Hanoi</h1>
          <Popup trigger={<button>Game Rules</button>} position="right center">
            <div>The goal of the game is to get all rings (or blocks) to another stack. You can only 
              move one ring at a time, and it cannot go on a number smaller than itself. Best of luck!
            </div>
          </Popup>
        </Row>
        <Row style={stackStyle}>
          {this.renderStacks()}
        </Row>
        <Row>
          {this.state.error}
        </Row>
        <Row>
          Current Stack: {this.showCurrentRing().toUpperCase()}
        </Row>
        <Row>
          <button onClick={this.resetGame}>Reset Game</button>
        </Row>
      </Col>
      </Grid>
    )
  }
}

  export default Towers;