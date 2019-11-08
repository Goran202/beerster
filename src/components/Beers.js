import React from 'react';
import Beer from './Beer';

const Beers = (props) => {
  const renderCards = () => {
    return props.beerList.map((beer, i) => {
      return (
        <div key={i} className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <Beer
            beer={beer}
            onBeerClick={props.onBeerClick}
            onCheckBoxChange={props.onCheckBoxChange}
          />
        </div>
      );
    });
  };

  return (
    <div className="container-fluid">
      <div className="row">{renderCards()}</div>
    </div>
  );
};

export default Beers;
