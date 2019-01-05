import React, { Component } from 'react';
import '../App.css';


class Calligraphy extends Component {

  // constructor() {
  //   super()
  //   this.state={
      
  //   }
  // }

  

  // componentDidMount() {
  //   // setting up canvas & 'query selectors'
  //   const canvas = this.refs.draw;
  //   const picker = this.refs.input;
  //   // const clearBtn = this.refs.clear;
  //   // const erase = this.refs.erase;
  //   const ctx = canvas.getContext('2d');

  //   //from my previous code:
  //   ctx.strokeStyle = `${picker.value}`
  //   ctx.lineJoin = 'round';
  //   ctx.lineCap = 'round';
  //   ctx.lineWidth = 3;
  //   // console.log(ctx.strokeStyle)
    
  // }

  // canvas(e) {
  //   let isDrawing = false;
  //   let lastX = 0;
  //   let lastY = 0;
  //   let direction = true;
  //   if(!isDrawing) return; //stop fn from running when they are not moused down
  //   // ctx.beginPath();
  //   // ctx.moveTo(lastX, lastY);
  //   // ctx.lineTo(e.offsetX, e.offsetY);
  //   // ctx.stroke();
  //   // changeWidth(e);
  //   [lastX, lastY] = [e.offsetX, e.offsetY]
  // }

  // handleColor(e) {
  //   // document.documentElement.style.setProperty(`--${base}`, this.value);
  //   // ctx.strokeStyle = `${picker.value}`;
  //   e.preventDefault();
  //   console.log(e)
  //   console.log("here")
  // }
  
  // clearBtn(e, canvas){
  //   //wont work yet
  //   e.preventDefault();
  //   console.log(e)
  //   // const context = canvas.getContext("2d");
  //   // context.clearRect(0,0,canvas.width,canvas.height);
  // }

  // eraseBtn(e){
  //   //wont work yet
  //   e.preventDefault();
  //   console.log(e)
  //   // ctx.lineWidth = 50;
  //   // ctx.strokeStyle = "white";
  }

  render(//setting up canvas
    const canvas = document.querySelector('#draw');
    const picker = document.querySelector('input');
    const clearBtn = document.querySelector('#clear');
    const erase = document.querySelector('#erase');
    const ctx = canvas.getContext('2d');
    canvas.width = 900;
    canvas.height = 500;
    ctx.strokeStyle = `${picker.value}`;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 3;
    
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let direction = true;
    
    //canvas functions
    function draw(e) {
      if(!isDrawing) return; //stop fn from running when they are not moused down
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
      changeWidth(e);
      [lastX, lastY] = [e.offsetX, e.offsetY]
    }
    
    function changeWidth(e){
      const newY = Math.ceil(e.offsetY/5);
      const newLastY = Math.ceil(lastY/5);
    
      if(newY <= newLastY){
        if(ctx.lineWidth == 3){
          return;
        }else if(ctx.lineWidth > 3){
          ctx.lineWidth--
        }
        // ctx.strokeStyle = "blue"
      }else if(newY >= newLastY){
        if(ctx.lineWidth == 20){
          return
        }else if(ctx.lineWidth < 20){
          ctx.lineWidth++
        }
      }
    }
    
    function handleColor() {
      document.documentElement.style.setProperty(`--${base}`, this.value);
      ctx.strokeStyle = `${picker.value}`;
    }
    
    function clearCanvas(){
      const context = canvas.getContext("2d");
      context.clearRect(0,0,canvas.width,canvas.height);
    }
    
    function eraserBtn(){
      ctx.lineWidth = 50;
      ctx.strokeStyle = "white";
      //need to fix this so the width doesnt change
    }
    
    //event listeners for canvas
    canvas.addEventListener('mousedown', (e) => {
      isDrawing = true;
      [lastX, lastY] = [e.offsetX, e.offsetY]
    })
    canvas.addEventListener('mousemove', draw)
    canvas.addEventListener('mouseup', () => isDrawing = false)
    canvas.addEventListener('mouseout', () => isDrawing = false)
    picker.addEventListener('change', handleColor);
    clearBtn.addEventListener('click', clearCanvas);
    erase.addEventListener('click', eraserBtn);)
}

export default Calligraphy;