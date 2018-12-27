import React, {Component} from "react";
// import {Grid, Col} from "react-bootstrap";
import tools from "../images/tools.jpg";

const fill = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  // overflow: 'hidden',
  background: `url(${tools}) no-repeat center center`,
  width: '100%',
  height: '500px'
}

// const imgStyle ={
//   flexShrink: '0',
//   height: '100%',
//   width: '100%'
// }

class Home extends Component {
  render(){
    return(
      <div>
          <div style={fill} className="mediaHome">
          </div>
      </div>
    )}
} 

  export default Home;