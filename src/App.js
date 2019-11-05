import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';
import Content from './components/Content';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Modal from './components/Modal';
import Join from './components/Join';
import punkApi from './apis/punkApi';

class App extends Component {
  state = {
    beerList: [],
    favBeerList: [],
  };

  componentDidMount() {
    punkApi
      .get('beers')
      .then((response) => {
        console.log(response);
        this.setState({ beerList: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    // const local = localStorage.getItem('myListLocal');
    // if (local) {
    //   const localJSON = JSON.parse(local);
    //   this.setState({
    //     myList: localJSON,
    //   });
    // }
  }

  render() {
    return (
      <>
        <Router>
          <Header />
          <Modal type={'exampleModal'} />
          <Jumbotron />
          <Switch>
            <Route exact path="/">
              <Content title="Beer" />
            </Route>
            <Route exact path="/home">
              <Content title="Beer" />
            </Route>
            <Route exact path="/favorites">
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
