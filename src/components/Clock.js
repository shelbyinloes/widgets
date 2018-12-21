import React, { Component } from 'react';

class Clock extends Component {
  render() {
    return (
    <div>
        <h2>Hi</h2>
    </div>
    )
  }
}

export default Clock;


// <body>


//     <div class="clock">
//       <div class="clock-face">
//         <div class="hand hour-hand"></div>
//         <div class="hand min-hand"></div>
//         <div class="hand second-hand"></div>
//       </div>
//     </div>


//   <style>
//     html {
//       background: #018DED url(http://unsplash.it/1500/1000?image=881&blur=50);
//       background-size: cover;
//       font-family: 'helvetica neue';
//       text-align: center;
//       font-size: 10px;
//     }
//     body {
//       margin: 0;
//       font-size: 2rem;
//       display: flex;
//       flex: 1;
//       min-height: 100vh;
//       align-items: center;
//     }
//     .clock {
//       width: 30rem;
//       height: 30rem;
//       border: 20px solid white;
//       border-radius: 50%;
//       margin: 50px auto;
//       position: relative;
//       padding: 2rem;
//       box-shadow:
//         0 0 0 4px rgba(0,0,0,0.1),
//         inset 0 0 0 3px #EFEFEF,
//         inset 0 0 10px black,
//         0 0 10px rgba(0,0,0,0.2);
//     }
//     .clock-face {
//       position: relative;
//       width: 100%;
//       height: 100%;
//       transform: translateY(-3px); /* account for the height of the clock hands */
//     }
//     .hand {
//       width: 50%;
//       height: 6px;
//       background: black;
//       position: absolute;
//       top: 50%;
//       transform-origin: 100%;
//       transform: rotate(90deg);
//       transition: all 0.5s;
//       transition-timing-function: cubic-bezier(0.1, 2.7, 0.5, 1);
//     }
//   </style>

//   <script>
//     const secondHand = document.querySelector('.second-hand');
//     const minHand = document.querySelector('.min-hand');
//     const hourHand = document.querySelector('.hour-hand');
//     function setDate() {
//       const now = new Date();
//       //get numeric value for sec, min, hours
//       const seconds = now.getSeconds();
//       const min = now.getMinutes();
//       const hour = now.getHours();
//       //finding correct degrees for sec, min, hours
//       const secondsDegrees = ((seconds / 60) * 360) + 90;
//       const minDegrees = ((min / 60) * 360) + 90;
//       const hourDegrees = ((hour / 12) * 360) + 90;
//       //making the line move!
//       secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
//       minHand.style.transform = `rotate(${minDegrees}deg)`;
//       hourHand.style.transform = `rotate(${hourDegrees}deg)`;
//       console.log(hour, min, seconds)
//     }
//     setInterval(setDate, 1000);
//   </script>
// </body>
// </html>