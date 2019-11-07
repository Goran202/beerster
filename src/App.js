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
    beersInCrateIds: [],
    favBeerIdList: [],
    selectedBeer: {
      name: 'beername',
      id: 66,
      ingredients: { hops: [], malt: [], yeast: '' },
    },
  };

  componentDidMount() {
    const local = localStorage.getItem('favBeerIdListLocal');

    let localJSON;
    if (local) {
      localJSON = JSON.parse(local);
    } else {
      localJSON = [];
    }
    localStorage.setItem('favBeerIdListLocal', JSON.stringify(localJSON));

    punkApi
      .get('beers')
      .then((response) => {
        this.addIsCheckedProperty(
          response.data,
          JSON.parse(localStorage.getItem('favBeerIdListLocal'))
        );
        this.setState({ beerList: response.data, selectedBeer: response.data[0] });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addIsCheckedProperty(arrayOfObjects, arrayOfIds) {
    console.log('addIs');
    console.log(arrayOfObjects);

    arrayOfObjects.map((object) => {
      object.isChecked = arrayOfIds.includes(object.id)
        ? (object.isChecked = true)
        : false;
      return object;
    });
  }

  updateLocalStorage = (id_arg) => {
    console.log('id_arg');
    console.log(id_arg);

    const local = localStorage.getItem('favBeerIdListLocal');
    let localJSON = JSON.parse(local);
    if (!localJSON.includes(id_arg)) {
      localJSON.push(id_arg);
      console.log('added');
    } else {
      console.log('removed');
      localJSON = localJSON.filter((id) => id !== id_arg);
    }
    localStorage.setItem('favBeerIdListLocal', JSON.stringify(localJSON));
  };

  onBeerClick = (id_arg) => {
    let tempState = { ...this.state };
    let tempBeer = tempState.beerList.find((beer) => beer.id === id_arg);
    this.setState({ selectedBeer: tempBeer });
  };

  onCheckBoxChange = (beer_arg) => {
    // beer_arg.isChecked = !beer_arg.isChecked;
    let helperState = { ...this.state };
    helperState.beerList.find(
      (beer) => beer.id === beer_arg.id
    ).isChecked = !helperState.beerList.find((beer) => beer.id === beer_arg.id).isChecked;
    this.setState(helperState);
    this.updateLocalStorage(beer_arg.id);
  };

  // onModalButtonClick = (beer_arg) => {
  //   const helper = { ...this.state };
  //   helper.beerList.find((beer) => beer === beer_arg).isInCrate = true;
  //   this.setState({ state: helper });
  // };
  onModalButtonClick = (beer_arg) => {
    console.log('Added to crate');

    let ids = this.state.beersInCrateIds;
    ids.push(beer_arg.id);
    this.setState({ beersInCrateIds: ids });
  };

  render() {
    // this.setState({ selectedBeer: this.state.beerList[0] });

    return (
      <>
        <div className="container-fluid">
          <Router>
            <Header />
            <Modal
              beer={this.state.selectedBeer}
              type={'exampleModal'}
              onCheckBoxChange={this.onCheckBoxChange}
              onModalButtonClick={this.onModalButtonClick}
            />
            <Jumbotron />
            <Switch>
              <Route exact path="/">
                <Content
                  beerList={this.state.beerList}
                  title="Beer"
                  onBeerClick={this.onBeerClick}
                  onCheckBoxChange={this.onCheckBoxChange}
                  beersInCrateIds={this.state.beersInCrateIds}
                />
              </Route>
              <Route path="/beerster">
                <Content
                  beerList={this.state.beerList}
                  title="Beer"
                  onBeerClick={this.onBeerClick}
                  onCheckBoxChange={this.onCheckBoxChange}
                  beersInCrateIds={this.state.beersInCrateIds}
                />
              </Route>
              <Route path="/home">
                <Content
                  beerList={this.state.beerList}
                  title="Beer"
                  onBeerClick={this.onBeerClick}
                  onCheckBoxChange={this.onCheckBoxChange}
                  beersInCrateIds={this.state.beersInCrateIds}
                />
              </Route>
              <Route path="/favorites">
                <Content
                  beerList={this.state.beerList.filter((beer) => beer.isChecked === true)}
                  title="My Favourite beers"
                  onBeerClick={this.onBeerClick}
                  onCheckBoxChange={this.onCheckBoxChange}
                  numBeersInCrate={this.state.beersInCrateIds}
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
