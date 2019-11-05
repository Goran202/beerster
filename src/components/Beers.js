import React from 'react';
import Beer from './Beer';

const Beers = () => {
  let a = [1, 2, 3, 4, 5];
  //   a = [];
  console.log(a.length);
  const renderCards = () => {
    return a.map((item, i) => {
      return (
        <div key={i} className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <Beer />
        </div>
      );
    });
  };

  return (
    <div className="container-fluid">
      <div className="row">{renderCards()}</div>
    </div>
  );

  /* {a.map((item) => (
        <div>
          <Beer />
          <p>item</p>
        </div>
      ))} */
};

export default Beers;
