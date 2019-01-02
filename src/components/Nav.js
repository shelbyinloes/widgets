import React, {Component} from "react";
import { Row, Col, Grid } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import Header from './Header.js';


const navButtons = {
  fontFamily: "'PT Sans Narrow', sans-serif",
  color: "#074A54",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}

const navSection ={
    backgroundColor: "#A8CDCC",
    width: "400px"
}


class Nav extends Component {
  render(){
    return(
      <div style={navSection}>
      <Grid fluid>
      <Col md={4}>
        <Row>
            <Header />
        </Row>
        <Row>
            <NavLink style={navButtons} to="/clock">
                <h1>Clock</h1>
            </NavLink>
        </Row>
        </Col>
        </Grid>
      </div>
    )}
} 

  export default Nav;