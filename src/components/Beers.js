import React from 'react';
import Beer from './Beer';
import uuid from 'uuid';
import bottle_final from '../assets/bottle_final.png';
import bottle_draft from '../assets/bottle_draft.png';

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
        <div key={uuid.v4()} className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
          <Beer
            beer={beer}
            onBeerClick={props.onBeerClick}
            onCheckBoxChange={props.onCheckBoxChange}
          />
        </div>
      );
    });
  };

  const renderCardsCarousel = () => (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
      data-touch="true"
    >
      <div className="carousel-inner">
        {props.beerList.map((beer, i) => {
          return (
            <div className={`carousel-item${i === 0 ? ' active' : ''}`}>
              <div
                key={uuid.v4()}
                className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3"
              >
                <Beer
                  beer={beer}
                  onBeerClick={props.onBeerClick}
                  onCheckBoxChange={props.onCheckBoxChange}
                />
              </div>
            </div>
          );
        })}
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );

  return (
    <>
      {/* <div className="d-block d-sm-block d-md-none">{renderCardsCarousel()}</div> */}
      <div className="container-fluid d-none d-md-block">
        <div className="row ">{renderCards()}</div>
      </div>
      <div className="d-block d-sm-block d-md-none">
        <div className="">{renderCardsCarousel()}</div>
      </div>
    </>
  );
};

export default Beers;
