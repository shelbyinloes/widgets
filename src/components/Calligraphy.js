import React, { Component } from 'react';
import '../App.css';


class Calligraphy extends Component {

  constructor() {
    super()
    this.state={
      
    }
  }

  

  componentDidMount() {
    // setting up canvas & 'query selectors'
    const canvas = this.refs.draw;
    const picker = this.refs.input;
    // const clearBtn = this.refs.clear;
    // const erase = this.refs.erase;
    const ctx = canvas.getContext('2d');

    //from my previous code:
    ctx.strokeStyle = `${picker.value}`
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 3;
    // console.log(ctx.strokeStyle)
    
  }

  canvas(e) {
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let direction = true;
    if(!isDrawing) return; //stop fn from running when they are not moused down
    // ctx.beginPath();
    // ctx.moveTo(lastX, lastY);
    // ctx.lineTo(e.offsetX, e.offsetY);
    // ctx.stroke();
    // changeWidth(e);
    [lastX, lastY] = [e.offsetX, e.offsetY]
  }

  handleColor(e) {
    // document.documentElement.style.setProperty(`--${base}`, this.value);
    // ctx.strokeStyle = `${picker.value}`;
    e.preventDefault();
    console.log(e)
    console.log("here")
  }
  
  clearBtn(e, canvas){
    //wont work yet
    e.preventDefault();
    console.log(e)
    // const context = canvas.getContext("2d");
    // context.clearRect(0,0,canvas.width,canvas.height);
  }

  eraseBtn(e){
    //wont work yet
    e.preventDefault();
    console.log(e)
    // ctx.lineWidth = 50;
    // ctx.strokeStyle = "white";
  }

  render() {
    return (
    <div>
        <div className="row header">
            <h1>Calligraphy</h1>
        </div>
        <canvas ref="draw" className="draw"/>
        <br />
        <label htmlFor="base">Color Picker</label>
        <input ref="input" className="base" type="color" name="base" defaultValue="#ffc600" onChange={this.handleColor}/>
        <button ref="clear" className="clear" onClick={this.clearBtn}>Clear</button>
        <button ref="erase" className="erase" onClick={this.eraseBtn}>Erase</button>
    </div>

    )
  }
}

export default Calligraphy;