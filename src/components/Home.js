import React, {Component} from "react";
// import { Col } from "react-bootstrap";
import tools from "../images/tools.jpg";

const fill = {
  // display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'center',
  // overflow: 'hidden',
  height: "600px"
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
          <img src={tools} style={fill} alt={"Widget Workshop"}/>
      </div>
    )}
} 

  export default Home;