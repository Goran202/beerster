import React from 'react';
import bottle_draft from '../assets/bottle_draft.png';
import bottle_final from '../assets/bottle_final.png';

const BeerInCrateImg = () => {
  return <img src={bottle_final} alt="bottle" />;
  // return Math.random() < 0.5 ? (
  //   <img src={bottle_draft} alt="bottle" />
  // ) : (
  //   <img src={bottle_final} alt="bottle" />
  // );
};

export default BeerInCrateImg;
