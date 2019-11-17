import React from "react";
import Beers from "./Beers";
import Crate from "./Crate";
import Sort from "./Sort";
import pattern_background from "../../assets/pattern_background.png";

const Content = ({
  title,
  pageNumber,
  beerList,
  sortBy,
  onBeerClick,
  onCheckBoxChange,
  onPaginationButtonClick,
  onSelectMenuChange,
  beersInCrateIds,
  onDropBeerToCrate
}) => {
  return (
    <div
      className="container"
      style={{
        backgroundColor: "white",
        backgroundImage: `url(${pattern_background})`
      }}
    >
      <div className="row">
        <div className="col-12 col-sm-12 col-md-7 col-lg-9 col-xl-9">
          <h2>{title}</h2>
          <Sort onSelectMenuChange={onSelectMenuChange} />
          <Beers
            typeOfList={title}
            beerList={beerList}
            sortBy={sortBy}
            onBeerClick={onBeerClick}
            onCheckBoxChange={onCheckBoxChange}
            pageNumber={pageNumber}
            onPaginationButtonClick={onPaginationButtonClick}
          />
        </div>
        <div className="col-12 col-sm-12 col-md-5 col-lg-3 col-xl-3">
          <h2>CRATE</h2>
          <Crate
            beerList={beerList}
            beersInCrateIds={beersInCrateIds}
            onDropBeerToCrate={onDropBeerToCrate}
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
