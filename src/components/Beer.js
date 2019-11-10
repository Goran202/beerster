import React from "react";
import HeartImage from "./HeartImage";

const Beer = ({ beer, onBeerClick, onCheckBoxChange }) => {
  const onDragStart = e => {
    e.persist();
    e.dataTransfer.setData("text/plain", beer.id);
    console.log(e.dataTransfer.getData("text"));
  };

  return (
    <div className='embed-responsive embed-responsive-1by1 text-center'>
      <div className='embed-responsive-item'>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
          style={{ position: "absolute", zIndex: "3" }}
          onClick={() => onCheckBoxChange(beer)}
        >
          <HeartImage isChecked={beer.isChecked} />
        </a>

        <button
          style={{ backgroundColor: "white" }}
          type='button'
          data-toggle='modal'
          data-target='#exampleModal'
          onClick={() => onBeerClick(beer.id)}
        >
          <div
            draggable='true'
            onDragStart={onDragStart}
            className='card mb-5'
            style={{ border: "0", backgroundColor: "white" }}
          >
            <div className='row no-gutters'>
              <div className='col-2' style={{ paddingTop: "40px" }}>
                <img src={beer.image_url} className='card-img' alt='...' />
              </div>
              <div className='col-10'>
                <div className='card-body p-0 pt-4'>
                  <h5 className='card-title mb-0'>{beer.name}</h5>
                  <p className='card-text mb-0'>IBU: {beer.ibu}%</p>
                  <p className='card-text mb-0'>ABV: {beer.abv}%</p>
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Beer;
