import React from "react";
import illustration from "../assets/illustration.png";
import button_primary from "../assets/button_primary.png";

const Jumbotron = ({ onJoinClick }) => {
  return (
    <div className='container'>
      <div className='jumbotrone-container'>
        <div
          className='row text-center'
          style={{
            paddingTop: "7em"
          }}
        >
          <div className='col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-7'>
            <h5
              className='text-white'
              style={{
                fontSize: "1em",
                textAlign: "left",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "700",
                lineHeight: "0.9",
                letterSpacing: "0.1em",
                paddingBottom: "3em"
              }}
            >
              THE BEERSTER PRO 2.0
            </h5>

            <h1
              className='text-white'
              style={{
                fontSize: "6em",
                textAlign: "left",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "700",
                lineHeight: "0.9"
              }}
            >
              JOIN OUR FAMOUS BEERUP!
            </h1>
            <br />
            <div
              className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'
              style={{
                textAlign: "left",
                padding: "0"
              }}
            >
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href='#/join' onClick={onJoinClick}>
                <button
                  type='button'
                  className='btn btn-outline-secondary btn-md'
                  style={{
                    textAlign: "left",
                    border: "none"
                  }}
                >
                  <img src={button_primary} alt='buttonPrimary'></img>
                </button>
              </a>
            </div>
          </div>
          <div className='col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5'>
            <img
              src={illustration}
              className='img-fluid'
              alt='illustration'
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
