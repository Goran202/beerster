import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';
import Content from './components/Content';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Modal from './components/Modal';

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Router>
          <Header />
          <Modal />
          <Switch>
            <Route exact path="/">
              <Jumbotron />
              <Content />
            </Route>
            <Route exact path="/home">
              <Jumbotron />
              <Content />
            </Route>
            <Route exact path="/favorites">
              Favorites page
              <Jumbotron />
            </Route>
            <Route exact path="/join">
              <Content />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
