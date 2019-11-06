import React from 'react';

const Beer = (props) => {
  // console.log(props.beer.image_url);

  return (
    <>
      <div className="embed-responsive embed-responsive-1by1 text-center">
        <div className="embed-responsive-item">
          <button
            // style={{ paddingBottom: '100%' }}
            type="button"
            // className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
            onClick={() => props.onBeerClick(props.beer.id)}
          >
            <div class="card mb-5">
              <label>heart checkbox</label>
              <input type="checkbox"></input>
              <div class="row no-gutters">
                <div class="col-md-2">
                  <img src={props.beer.image_url} class="card-img" alt="..." />
                </div>
                <div class="col-md-10">
                  <div class="card-body">
                    <h5 className="card-title">{props.beer.name}</h5>
                    <p className="card-text">IBU: {props.beer.ibu}%</p>
                    <p className="card-text">ABV: {props.beer.abv}%</p>
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
        </div>
      </div>
    </>
  );
};

export default Beer;
