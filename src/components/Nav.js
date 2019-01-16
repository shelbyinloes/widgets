import React, {Component} from "react";
import { Col, Grid } from "react-bootstrap";
import { NavLink } from 'react-router-dom';


const navButtons = {
  fontFamily: "'PT Sans Narrow', sans-serif",
  color: "#F0393B",
  textDecoration: "none",
  marginBottom: '10px'
}

const navSection ={
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "15px"
}


class Nav extends Component {
  render(){
    return(
      <div style={navSection}>
        <Grid fluid>
          <Col>
            <NavLink style={navButtons} to="/clock">
              <h1>Clock</h1>
            </NavLink>
            <NavLink style={navButtons} to="/weather">
              <h1>Weather</h1>
            </NavLink>
            <NavLink style={navButtons} to="/towers">
              <h1>Towers of Hanoi</h1>
            </NavLink>
            <h4 style={navButtons}>& always more coming!</h4>
          </Col>
        </Grid>
      </div>
    )}
} 

  export default Nav;