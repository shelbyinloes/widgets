import React, { Component } from 'react';
import '../App.css';


class Calligraphy extends Component {

  constructor() {
    super()
    this.state={
      
    }
  }

  componentDidMount() {
    //from example:
    const canvas = this.refs.draw;
    const ctx = canvas.getContext('2d');

    //from my previous code:
    ctx.strokeStyle = `${picker.value}`;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 3;

  }

  render() {
    return (
    <div>
        <div className="row header">
            <h1>Calligraphy</h1>
        </div>
        <canvas ref="draw" className="draw" />
        <br />
        <label for="base">Color Picker</label>
        <input ref="input" className="base" type="color" name="base" value="#ffc600" />
        <button ref="clear" className="clear">Clear</button>
        <button ref="erase" className="erase">Erase</button>
    </div>

    )
  }
}

export default Calligraphy;