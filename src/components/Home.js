import React, {Component} from "react";
// import { Col } from "react-bootstrap";
import tools from "../images/tools.jpg";

const fill = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  // overflow: 'hidden',
  background: `url(${tools}) no-repeat center center`,
  height: '600px',
  backgroundSize: 'cover'
}

// const imgStyle ={
//   flexShrink: '0',
//   height: '100%',
//   width: '100%'
// }

class Home extends Component {
  render(){
    return(
      <div style={fill}>
      </div>
    )}
}

  export default Home;