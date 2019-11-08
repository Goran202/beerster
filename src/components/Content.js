import React from 'react';
import Beers from './Beers';
import Crate from './Crate';
import Sort from './Sort';
import pattern_background from '../assets/pattern_background.png';

const Content = (props) => (
  <div
    className="container"
    style={{
      backgroundColor: 'white',
      backgroundImage: `url(${pattern_background})`,
    }}
  >
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8 col-xl-8">
        <h2>{props.title}</h2>
        <Sort />
        <Beers
          beerList={props.beerList}
          onBeerClick={props.onBeerClick}
          onCheckBoxChange={props.onCheckBoxChange}
        />
      </div>
      <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4 col-xl-4">
        <h2>CRATE</h2>
        <Crate beerList={props.beerList} beersInCrateIds={props.beersInCrateIds} />
      </div>
    </div>
  </div>
);

export default Content;
