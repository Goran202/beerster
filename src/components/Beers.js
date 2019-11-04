import React from 'react';
import Beer from './Beer';

const Beers = () => {
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(a.length);

  return (
    <div>
      {a.map((item) => (
        <div>
          <Beer />
          <p>item</p>
        </div>
      ))}
    </div>
  );
};

export default Beers;
