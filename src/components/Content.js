import React from 'react';
import Beers from './Beers';
import Crate from './Crate';
import Sort from './Sort';
import Pagination from './Pagination';
import pattern_background from '../assets/pattern_background.png';

const Content = (props) => {
  //props.pageNumberReset();

  return (
    <div
      className="container"
      style={{
        // maxWidth: '85%',
        backgroundColor: 'white',
        backgroundImage: `url(${pattern_background})`,
      }}
    >
      <div className="row">
        <div className="col-12 col-sm-12 col-md-7 col-lg-9 col-xl-9">
          <h2>{props.title}</h2>
          <Sort onSelectMenuChange={props.onSelectMenuChange} />
          {/* <Pagination
          pageNumber={props.pageNumber}
          onPaginationButtonClick={props.onPaginationButtonClick}
          beerList={props.beerList}
        /> */}
          <Beers
            typeOfList={props.title}
            beerList={props.beerList}
            sortBy={props.sortBy}
            onBeerClick={props.onBeerClick}
            onCheckBoxChange={props.onCheckBoxChange}
            pageNumber={props.pageNumber}
            onPaginationButtonClick={props.onPaginationButtonClick}
          />
        </div>
        <div className="col-12 col-sm-12 col-md-5 col-lg-3 col-xl-3">
          <h2>CRATE</h2>
          <Crate
            beerList={props.beerList}
            beersInCrateIds={props.beersInCrateIds}
            onDropBeerToCrate={props.onDropBeerToCrate}
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
