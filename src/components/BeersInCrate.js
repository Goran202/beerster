import React from 'react';
import BeerInCrateImg from './BeerInCrateImg';

const BeersInCrate = (props) => {
  console.log(props);

  return (
    <div className="container">
      <div className="row">
        {/* {[1, 2, 3, 4, 5].map((beer, i) => ( */}
        {/* {props.beerList
          .filter((beer) => beer.isInCrate === true) */}
        {props.beersInCrateIds.map((beer, i) => (
          <div key={i} className="col-3">
            <BeerInCrateImg />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeersInCrate;
