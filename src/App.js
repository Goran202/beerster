import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';
import Content from './components/Content';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Modal from './components/Modal';
import Join from './components/Join';

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Router>
          <Header />
          <Modal type={'exampleModal'} />
          <Switch>
            <Route exact path="/">
              <Jumbotron />
              <Content title="Beer" />
            </Route>
            <Route exact path="/home">
              <Jumbotron />
              <Content title="Beer" />
            </Route>
            <Route exact path="/favorites">
              <Jumbotron />
              <Content title="My Favourite beers" />
            </Route>
            <Route exact path="/join">
              <Join />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
