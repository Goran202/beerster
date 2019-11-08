import React from 'react';
import Beer from './Beer';
import uuid from 'uuid';
import bottle_final from '../assets/bottle_final.png';

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
      class="carousel slide"
      data-ride="carousel"
      data-touch="true"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src={bottle_final} alt="First slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={bottle_final} alt="Second slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={bottle_final} alt="Third slide" />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );

  return (
    <>
      <div>{renderCardsCarousel()}</div>
      <div className="container-fluid d-none d-md-block">
        <div className="row ">{renderCards()}</div>
      </div>
    </>
  );
};

export default Beers;
