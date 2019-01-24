import React, { Component } from 'react';
import { Grid, Col } from 'react-bootstrap';

class Timer extends Component {

  constructor() {
    super()
    this.state={
      time: 5
    }
  }

  getNumber = (e) => {
      e.preventDefault();
      const inputNumber = e.target.elements.inputNumber.value;

      this.setState({
          time: inputNumber
      })
  }

  render() {

    return (
        <Grid style={{backgroundColor: 'white'}}>
            <Col sm={12}>
                <form onSubmit={this.getNumber}>
                <h3>Input time:</h3>
                <input type="number" name="inputNumber" required />
                <button type="submit">Sumbit</button>
                </form>
            </Col>
            <Col sm={12}>
                <h1>{this.state.time}</h1>
            </Col>
     
        </Grid>
    )
  }
}

export default Timer;