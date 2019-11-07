import React from 'react';
import HeartImage from './HeartImage';

const Modal = (props) => {
  console.log(props);

  return (
    <>
      {/* <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="card mb-5">
          <div class="row no-gutters">
            <div class="col-md-2">
              <img src={props.beer.image_url} class="card-img" alt="..." />
            </div>
            <div class="col-md-10">
              <div class="card-body">
                <h5 className="card-title">{props.beer.name}</h5>
                <p className="card-text">IBU: {props.beer.ibu}%</p>
                <p className="card-text">ABV: {props.beer.abv}%</p>
                <p className="card-text">{props.beer.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <button type="button" onClick={() => props.onCheckBoxChange(props.beer)}>
          <HeartImage isChecked={props.beer.isChecked} />
        </button>

        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="card" style={{}}>
              <label>heart checkbox</label>
              <input type="checkbox"></input>
              <div class="row no-gutters">
                <div class="col-md-2">
                  <img className="card-img-top" src={props.beer.image_url} alt="Card" />
                </div>
                <div class="col-md-10">
                  <div className="card-body">
                    <h4 className="card-title">{props.beer.name}</h4>
                    <p className="card-text">IBU: {props.beer.ibu}%</p>
                    <p className="card-text">ABV: {props.beer.abv}%</p>

                    <p className="card-text">
                      INGREDIENTS: <br />
                      HOPS: {props.beer.ingredients.hops.map((item) => item.name + ', ')}
                      <br />
                      MALT: {props.beer.ingredients.malt.map((item) => item.name + ', ')}
                      <br />
                      YEAST:{props.beer.ingredients.yeast}
                      {/* {props.beer.ingredients.yeast.map((item) => item.name + ', ')} */}
                      <br />
                    </p>
                    <p className="card-text">{props.beer.description}</p>

                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => props.onModalButtonClick(props.beer)}
                    >
                      ADD TO CRATE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
