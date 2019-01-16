import React, {Component} from "react";
import { Grid } from "react-bootstrap";
import {NavLink} from 'react-router-dom';
import '../App.css';
import logo_transparent from '../images/logo_transparent.png';

const header = {
  width: "100%",
  padding: "30px 0px"
}

const headerMain = {
  // backgroundColor: "#A8CDCC"
}

class Header extends Component {
  render(){
    return(
      <Grid fluid style={headerMain}>
        <NavLink to="/">
              <img src={logo_transparent} style={header} alt={"Widget Workshop Home"}/>
        </NavLink>
      </Grid>
    )}
} 

  export default Header;