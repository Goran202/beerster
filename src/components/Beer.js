import React from 'react';
import HeartImage from './HeartImage';

const Beer = (props) => {
  console.log('testing rendering');
  return (
    <div className="embed-responsive embed-responsive-1by1 text-center">
      <div className="embed-responsive-item">
        <a
          style={{ position: 'absolute', zIndex: '3' }}
          // type="button"
          onClick={() => props.onCheckBoxChange(props.beer)}
        >
          <HeartImage isChecked={props.beer.isChecked} />
        </a>

        <button
          style={{ backgroundColor: 'white' }}
          type="button"
          data-toggle="modal"
          data-target="#exampleModal"
          onClick={() => props.onBeerClick(props.beer.id)}
        >
          <div className="card mb-5" style={{ border: '0', backgroundColor: 'white' }}>
            <div className="row no-gutters">
              <div className="col-2" style={{ paddingTop: '40px' }}>
                <img src={props.beer.image_url} className="card-img" alt="..." />
              </div>
              <div className="col-10">
                <div className="card-body">
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
  );
};

export default Beer;
