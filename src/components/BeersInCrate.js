import React from 'react';
import BeerInCrateImg from './BeerInCrateImg';

const BeersInCrate = (props) => {
  let h = props.beersInCrateIds;
  console.log(props.beersInCrateIds.slice(0, 20));
  console.log(h.slice(0, 20));
  console.log(h.slice(31, 120));

  return (
    <div className="container">
      <div className="row">
        {/* {[1, 2, 3, 4, 5].map((beer, i) => ( */}
        {/* {props.beerList
          .filter((beer) => beer.isInCrate === true) */}
        {props.beersInCrateIds.slice(0, 20).map((beer, i) => (
          <div key={i} className="col-3">
            <BeerInCrateImg />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeersInCrate;
