import React from 'react';

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
                    <p className="card-text">{props.beer.description}</p>

                    <button type="button" className="btn btn-secondary">
                      ADD TO CART
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
