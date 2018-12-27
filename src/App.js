import React, { Component } from 'react';
import './App.css';
import { Grid, Row } from 'react-bootstrap';
import Clock from "./components/Clock.js";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <Grid fluid>
          <Row>
            <Header />
          </Row>
          <Row>
            <Home />
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
