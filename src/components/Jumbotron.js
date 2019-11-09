import React from 'react';
import illustration from '../assets/illustration.png';
import button_primary from '../assets/button_primary.png';
import pattern from '../assets/pattern.png';

const Jumbotron = () => {
  return (
    <div
      className="container"
      style={
        {
          // backgroundImage: `url(${pattern})`,
        }
      }
    >
      <div className="jumbotrone">
        <div className="row text-center">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">
            <h5
              className="text-white"
              style={{
                fontSize: '2vw',
              }}
            >
              THE BEERSTER PRO 2.0
            </h5>
          </div>
          <br />
          <br />
          <br />
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">
            <h1
              className="text-white"
              style={{
                fontSize: '6vw',
              }}
            >
              JOIN OUR FAMOUS BEERUP!
            </h1>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
            <img src={illustration} class="img-fluid" alt="illustration"></img>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="/join">
              {/* <button type="button" className="btn btn-outline-secondary btn-lg"></button> */}
              <img src={button_primary} alt="buttonPrimary"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
