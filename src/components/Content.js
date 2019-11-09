import React from 'react';
import Beers from './Beers';
import Crate from './Crate';
import Sort from './Sort';
import pattern_background from '../assets/pattern_background.png';

const Content = (props) => (
  <div
    className="container"
    style={{
      // width: '95%',
      backgroundColor: 'white',
      backgroundImage: `url(${pattern_background})`,
    }}
  >
    <div className="row">
      <div className="col-8 col-sm-8 col-md-8 col-lg-9 col-xl-9">
        <h2>{props.title}</h2>
        <Sort onSelectMenuChange={props.onSelectMenuChange} />

        <Beers
          beerList={props.beerList}
          sortBy={props.sortBy}
          onBeerClick={props.onBeerClick}
          onCheckBoxChange={props.onCheckBoxChange}
        />
      </div>
      <div className="col-8 col-sm-8 col-md-4 col-lg-3 col-xl-3">
        <h2>CRATE</h2>
        <Crate beerList={props.beerList} beersInCrateIds={props.beersInCrateIds} />
      </div>
    </div>
  </div>
);

export default Content;
