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
        <div class="card mb-3">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src={props.beer.image_url} class="card-img" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="card" style={{}}>
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
        </div> */}
      </button>
    </>
  );
};

export default Beer;
