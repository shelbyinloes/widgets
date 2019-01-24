import React, { Component } from 'react';
import {Grid} from 'react-bootstrap';

class Clock extends Component {

  constructor() {
    super()
    this.state={
      time: new Date()
    }
  }

  currentTime() {
    this.setState({
      time: new Date()
    })
  }

  componentWillMount() {
    setInterval(() => this.currentTime(), 1000)
  }

  render() {

    const timeStyle ={
      color: "black",
      border: "2px solid black",
      borderRadius: "4px",
      padding: "15px",
      width: "100%", 
      fontSize: "50px",
      backgroundColor: 'white'
    }

    return (
        <Grid fluid style={timeStyle}>{this.state.time.toLocaleTimeString()}</Grid>
    )
  }
}

export default Clock;