import React from 'react';
import HeartImage from './HeartImage';

const Beer = (props) => {
  return (
    <>
      <div className="embed-responsive embed-responsive-1by1 text-center">
        <div className="embed-responsive-item">
          <button
            style={{ position: 'absolute', zIndex: '3' }}
            type="button"
            onClick={() => props.onCheckBoxChange(props.beer)}
          >
            <HeartImage isChecked={props.beer.isChecked} />
          </button>

          <button
            style={{ backgroundColor: 'white' }}
            type="button"
            data-toggle="modal"
            data-target="#exampleModal"
            onClick={() => props.onBeerClick(props.beer.id)}
          >
            <div class="card mb-5" style={{ border: '0', backgroundColor: 'white' }}>
              <div class="row no-gutters">
                <div class="col-2" style={{ paddingTop: '40px' }}>
                  <img src={props.beer.image_url} class="card-img" alt="..." />
                </div>
                <div class="col-10">
                  <div class="card-body">
                    <h5 className="card-title">{props.beer.name}</h5>
                    <p className="card-text">IBU: {props.beer.ibu}%</p>
                    <p className="card-text">ABV: {props.beer.abv}%</p>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Beer;
