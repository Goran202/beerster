import React from 'react';
import illustration from '../assets/illustration.png';
import button_primary from '../assets/button_primary.png';
import pattern from '../assets/pattern.png';

const Jumbotron = () => {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: `url(${pattern})`,
      }}
    >
      <div className="row jumbotrone">
        <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
          <p>THE BEERSTER PRO 2.0</p>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
          <p>JOIN OUR FAMOUS BEERUP!</p>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
          <img src={illustration} alt="illustration"></img>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#">
            {/* <button type="button" className="btn btn-outline-secondary btn-lg"></button> */}
            <img src={button_primary} alt="buttonPrimary"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
