import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header, Footer, Jumbotron, Content, Modal, Join } from './components';
import punkApi from './apis/punkApi';

import './style.css';

const initializeLocalStorage = () => {
  if (!localStorage.getItem('favBeerIdListLocal')) {
    localStorage.setItem('favBeerIdListLocal', JSON.stringify([]));
  }
};

class App extends Component {
  state = {
    beerList: [],
    beersInCrateIds: [],
    favBeerIdList: [],
    selectedBeer: {
      name: '',
      id: '',
      ingredients: { hops: [], malt: [], yeast: '' },
    },
  };

  fetchDataFromApi = () => {
    punkApi
      .get('beers')
      .then((response) => {
        this.addIsCheckedProperty(
          response.data,
          JSON.parse(localStorage.getItem('favBeerIdListLocal'))
        );
        this.setState({
          beerList: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    initializeLocalStorage();
    this.fetchDataFromApi();
  }

  addIsCheckedProperty = (arrayOfObjects, arrayOfIds) => {
    arrayOfObjects.map((object) => {
      object.isChecked = arrayOfIds.includes(object.id)
        ? (object.isChecked = true)
        : false;
      return object;
    });
  };

  updateLocalStorage = (id_arg) => {
    const local = localStorage.getItem('favBeerIdListLocal');
    let localJSON = JSON.parse(local);
    if (!localJSON.includes(id_arg)) {
      localJSON.push(id_arg);
    } else {
      localJSON = localJSON.filter((id) => id !== id_arg);
    }
    localStorage.setItem('favBeerIdListLocal', JSON.stringify(localJSON));
  };

  onBeerClick = (id_arg) => {
    let tempState = { ...this.state };
    let tempBeer = tempState.beerList.find((beer) => beer.id === id_arg);
    //  this.setState({ selectedBeer: tempBeer });
  };

  onCheckBoxChange = (beer_arg) => {
    let helperState = { ...this.state };
    helperState.beerList.find(
      (beer) => beer.id === beer_arg.id
    ).isChecked = !helperState.beerList.find((beer) => beer.id === beer_arg.id).isChecked;
    this.setState(helperState);
    this.updateLocalStorage(beer_arg.id);
  };

  onModalButtonClick = (beer_arg) => {
    let ids = this.state.beersInCrateIds;
    ids.push(beer_arg.id);
    this.setState({ beersInCrateIds: ids });
  };

  render() {
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
                  beersInCrateIds={this.state.beersInCrateIds}
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
