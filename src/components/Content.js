import React from 'react';
import Beers from './Beers';
import Crate from './Crate';
import pattern_background from '../assets/pattern_background.png';

const Content = (props) => {
  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${pattern_background})`,
      }}
    >
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8 col-xl-8">
          <h2>{props.title}</h2>
          <Beers beerList={props.beerList} onBeerClick={props.onBeerClick} />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4 col-xl-4">
          <h2>CRATE</h2>
          <Crate />
        </div>
      </div>
    </div>
  );
};

export default Content;
