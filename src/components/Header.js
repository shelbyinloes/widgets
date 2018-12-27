import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";
import {NavLink} from 'react-router-dom';
import '../App.css';

const header = {
  backgroundColor: "#EEE",
  fontFamily: "'Rochester', cursive"
}


// this section will stay fixed, but will become opaque

class Header extends Component {
  render(){
    return(
      <div>
        <NavLink to="/">
        <Row style={header}>
          <Col sm={12}>
            {/* need to get image responsive */}
            {/* need to make header sticky (react-sticky-header?) */}
            <h1>Widget Workshop</h1>
          </Col>
        </Row>
        </NavLink>
      </div>
    )}
} 

  export default Header;