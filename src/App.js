import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap';
import Clock from "./components/Clock.js";
import Home from "./components/Home.js";
import Nav from "./components/Nav.js";
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <Grid fluid>
        <Row>
        <Col md={4}>
            <Nav />
        </Col>
        <Col md={6}>
          <Home />
        </Col>
        </Row>
      </Grid>
        
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/clock' component={Clock} />
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
