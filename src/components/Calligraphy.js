import React, { Component } from 'react';
import '../App.css';


class Calligraphy extends Component {

  constructor() {
    super()
    this.state={
      
    }
  }


  render() {
    return (
    <div>
        <div className="row header">
            <h1>Calligraphy</h1>
        </div>
        <canvas className="draw" />
        <br />
        <label for="base">Color Picker</label>
        <input className="base" type="color" name="base" value="#ffc600" />
        <button className="clear">Clear</button>
        <button className="erase">Erase</button>
    </div>

    )
  }
}

export default Calligraphy;