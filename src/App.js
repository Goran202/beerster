import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        <Content />
        <Footer />
      </>
    );
  }
}

export default App;
