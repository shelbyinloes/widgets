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
    return (
    <div>
        {this.state.time.toLocaleTimeString()}
    </div>
    )
  }
}

export default Clock;