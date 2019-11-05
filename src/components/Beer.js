import React from 'react';
import pattern_background from '../assets/pattern_background.png';

const Beer = () => {
  return (
    <div className="card" style={{}}>
      <input type="checkbox"></input>
      <img
        style={{}}
        className="card-img-top"
        src="https://images.punkapi.com/v2/192.png"
        alt="Card"
      />
      <div className="card-body">
        <h4 className="card-title">PUNK IPA</h4>
        <p className="card-text">IBU: ___</p>
        <p className="card-text">ABV: ___</p>
      </div>
    </div>
  );
};

export default Beer;
