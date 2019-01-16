import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap';
import Clock from "./components/Clock.js";
import Towers from "./components/Towers.js";
import Weather from "./components/Weather.js";
// import Calligraphy from "./components/Calligraphy";
import Home from "./components/Home.js";
import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <Grid fluid>
        <Row>
        <Col md={4} sm={3}>
            <Header />
            <Nav />
        </Col>
        <Col md={8} sm={7}>
        <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/clock' component={Clock} />
        <Route path='/towers' component={Towers} />
        <Route path='/weather' component={Weather} />        
        
        {/* <Route path='/calligraphy' component={Calligraphy} /> */}
      </Switch>
        </Col>
        </Row>
      </Grid>
        
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
