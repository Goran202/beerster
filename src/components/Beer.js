import React from 'react';

const Beer = (props) => {
  // console.log(props.beer.image_url);

  return (
    <>
      <button
        type="button"
        // className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
        onClick={() => props.onBeerClick(props.beer.id)}
      >
        <div className="card" style={{}}>
          <input type="checkbox"></input>
          <img
            style={{}}
            className="card-img-top"
            // src="https://images.punkapi.com/v2/192.png"
            src={props.beer.image_url}
            alt="Card"
          />
          <div className="card-body">
            <h4 className="card-title">{props.beer.name}</h4>
            <p className="card-text">IBU: {props.beer.ibu}%</p>
            <p className="card-text">ABV: {props.beer.abv}%</p>
          </div>
        </div>
      </button>
    </>
  );
};

export default Beer;
