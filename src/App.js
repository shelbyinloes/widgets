import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap';
import Clock from "./components/Clock.js";
import Towers from "./components/Towers.js";
import Weather from "./components/Weather.js";
import Home from "./components/Home.js";
import Header from "./components/Header.js";
import NavDropdown from "./components/NavDropdown.js";
import Timer from "./components/Timer.js";
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Grid fluid>
        <Row>
        <Col md={8} mdOffset={2}>
            <Header />
            <NavDropdown />
        </Col>
        <Col sm={10} smOffset={1}>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/clock' component={Clock} />
            <Route path='/Timer' component={Timer} />
            <Route path='/towers' component={Towers} />
            <Route path='/weather' component={Weather} />        
          </Switch>
        </Col>
        </Row>
      </Grid>
      </BrowserRouter>
    );
  }
}

export default App;
