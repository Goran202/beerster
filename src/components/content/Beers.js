import React from "react";
import Beer from "./Beer";
import uuid from "uuid";
import Pagination from "./Pagination";

const Beers = ({
  beerList,
  pageNumber,
  typeOfList,
  sortBy,
  onBeerClick,
  onCheckBoxChange,
  onPaginationButtonClick
}) => {
  switch (sortBy) {
    case "name":
      beerList.sort((a, b) => (a.name > b.name ? 1 : -1));
      break;
    case "ibu":
      console.log("IBU");
      beerList.sort((a, b) => a.ibu - b.ibu);
      break;
    case "abv":
      beerList.sort((a, b) => a.abv - b.abv);
      break;
    default:
      beerList.sort((a, b) => (a.name > b.name ? 1 : -1));
  }

  const renderCards = () =>
    beerList.slice((pageNumber - 1) * 15, pageNumber * 15).map((beer, i) => {
      return (
        <div
          key={uuid.v4()}
          className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3"
        >
          <Beer
            beer={beer}
            onBeerClick={onBeerClick}
            onCheckBoxChange={onCheckBoxChange}
          />
        </div>
      );
    });

  const renderCardsCarousel = () => (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
      data-touch="true"
    >
      <div className="carousel-inner">
        {beerList.map((beer, i) => {
          return (
            <div
              key={uuid.v4()}
              className={`carousel-item${i === 0 ? " active" : ""}`}
            >
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                <Beer
                  beer={beer}
                  onBeerClick={onBeerClick}
                  onCheckBoxChange={onCheckBoxChange}
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
      <div className="container-fluid d-none d-md-block">
        <div className="row ">
          <Pagination
            typeOfList={typeOfList}
            pageNumber={pageNumber}
            onPaginationButtonClick={onPaginationButtonClick}
            beerList={beerList}
          />
        </div>
        <div className="row ">{renderCards()}</div>
      </div>
      <div className="d-block d-sm-block d-md-none">
        <div className="">{renderCardsCarousel()}</div>
      </div>
    </>
  );
};

export default Beers;
