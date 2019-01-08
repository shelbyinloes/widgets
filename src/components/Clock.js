import React, { Component } from 'react';

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
      color: "#074A54",
      border: "6px solid black",
      borderRadius: "4px",
      padding: "15px",
      width: "100%", 
      fontSize: "50px",
      marginTop: "40px"
    }

    return (
        <div style={timeStyle}>{this.state.time.toLocaleTimeString()}</div>
    )
  }
}

export default Clock;