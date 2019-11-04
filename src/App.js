import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';
import Content from './components/Content';

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        <Jumbotron />
        <Content />
        <Footer />
      </>
    );
  }
}

export default App;
