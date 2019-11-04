import React from 'react';
import illustration from '../assets/illustration.png';
import button_pimary from '../assets/button_primary.png';

const Jumbotron = () => {
  return (
    <div className="container-fluid">
      <div className="row jumbotron">
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
            <img src={button_pimary} alt="buttonPrimary"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
