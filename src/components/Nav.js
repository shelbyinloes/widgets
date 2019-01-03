import React, {Component} from "react";
import { Col, Grid } from "react-bootstrap";
import { NavLink } from 'react-router-dom';


const navButtons = {
  fontFamily: "'PT Sans Narrow', sans-serif",
  color: "#074A54",
  textDecoration: "none"
}

const navSection ={
    backgroundColor: "#A8CDCC",
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
          <Col md={4}>
            <NavLink style={navButtons} to="/clock">
              <h1>Clock</h1>
            </NavLink>
          </Col>
        </Grid>
      </div>
    )}
} 

  export default Nav;