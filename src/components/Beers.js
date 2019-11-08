import React from 'react';
import Beer from './Beer';
import uuid from 'uuid';

const Beers = (props) => {
  switch (props.sortBy) {
    case 'name':
      props.beerList.sort((a, b) => (a.name > b.name ? 1 : -1));
      break;
    case 'ibu':
      console.log('IBU');
      props.beerList.sort((a, b) => a.ibu - b.ibu);
      break;
    case 'abv':
      props.beerList.sort((a, b) => a.abv - b.abv);
      break;
    default:
      props.beerList.sort((a, b) => (a.name > b.name ? 1 : -1));
  }

  const renderCards = () => {
    return props.beerList.map((beer, i) => {
      return (
        <div key={uuid.v4()} className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
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
