import React, {Component} from "react";
// import {Row, Col} from "react-bootstrap";
import {NavLink} from 'react-router-dom';
import '../App.css';
import logo from '../images/logo.png';

const header = {
  backgroundColor: "#EEE",
  width: "300px",
  margin: "50px",
  fontFamily: "'Rochester', cursive"
}


class Header extends Component {
  render(){
    return(
      <div>
        <NavLink to="/">
              <img src={logo} style={header} alt={"Widget Workshop"}/>
        </NavLink>
      </div>
    )}
} 

  export default Header;