import React, {Component} from "react";
import Popup from 'reactjs-popup';
// import { Col } from "react-bootstrap";
// import tools from "../images/tools.jpg";

// const fill = {
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   // overflow: 'hidden',
//   background: `url(${tools}) no-repeat center center`,
//   height: '600px',
//   backgroundSize: 'cover'
// }

// const imgStyle ={
//   flexShrink: '0',
//   height: '100%',
//   width: '100%'
// }

class Home extends Component {
  render(){
    return(
      <div>
          <Popup trigger={<button>About this site</button>} position="bottom center">
            <div>
              <strong>First of all, welcome!</strong><br></br>
              This sandbox/workshop is a place for me to build smaller projects. Putting them all 
              on one site allows for less initial set up per app and allows others to see many 
              projects all together. All projects are a work in progress, and have minimal styling. 
              Check back often for updates!  
            </div>
          </Popup>
      </div>
    )}
}

  export default Home;