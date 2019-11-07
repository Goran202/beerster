import React from 'react';
import heart_outline from '../assets/heart_outline.png';
import heart_solid from '../assets/heart_solid.png';

const HeartImage = (props) => {
  return (
    <>
      {props.isChecked ? (
        <img src={heart_solid} alt="Card" />
      ) : (
        <img src={heart_outline} alt="Card" />
      )}
    </>
  );
};

export default HeartImage;
