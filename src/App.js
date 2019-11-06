import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';
import Content from './components/Content';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Modal from './components/Modal';
import Join from './components/Join';
import punkApi from './apis/punkApi';
import './style.css';

class App extends Component {
  state = {
    beerList: [],
    favBeerList: [],
    selectedBeer: { name: 'beername', id: 66 },
  };

  componentDidMount() {
    punkApi
      .get('beers')
      .then((response) => {
        //console.log(response);
        this.setState({ beerList: response.data, selectedBeer: response.data[0] });
      })
      .catch((error) => {
        console.log(error);
      });

    // const local = localStorage.getItem('favBeerListLocal');
    // if (local) {
    //   const localJSON = JSON.parse(local);
    //   this.setState({
    //     myList: localJSON,
    //   });
    // }
  }

  onBeerClick = (id_arg) => {
    let tempState = { ...this.state };
    let tempBeer = tempState.beerList.find((beer) => beer.id === id_arg);
    this.setState({ selectedBeer: tempBeer });
  };

  render() {
    // this.setState({ selectedBeer: this.state.beerList[0] });

    return (
      <>
        <div className="container-fluid">
          <Router>
            <Header />
            <Modal beer={this.state.selectedBeer} type={'exampleModal'} />
            <Jumbotron />
            <Switch>
              <Route exact path="/">
                <Content
                  beerList={this.state.beerList}
                  title="Beer"
                  onBeerClick={this.onBeerClick}
                />
              </Route>
              <Route exact path="/beerster">
                <Content
                  beerList={this.state.beerList}
                  title="Beer"
                  onBeerClick={this.onBeerClick}
                />
              </Route>
              <Route path="/home">
                <Content
                  beerList={this.state.beerList}
                  title="Beer"
                  onBeerClick={this.onBeerClick}
                />
              </Route>
              <Route path="/favorites">
                <Content
                  beerList={this.state.favBeerList}
                  title="My Favourite beers"
                  onBeerClick={this.onBeerClick}
                />
              </Route>
              <Route path="/join">
                <Join />
              </Route>
            </Switch>
            <Footer />
          </Router>
        </div>
      </>
    );
  }
}

export default App;
