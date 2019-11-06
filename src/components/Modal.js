import React from 'react';

const Modal = (props) => {
  console.log(props);

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="card" style={{}}>
              <input type="checkbox"></input>
              <img className="card-img-top" src={props.beer.image_url} alt="Card" />
              <div className="card-body">
                <h4 className="card-title">{props.beer.name}</h4>
                <p className="card-text">IBU: {props.beer.ibu}%</p>
                <p className="card-text">ABV: {props.beer.abv}%</p>
              </div>
              <button type="button" className="btn btn-secondary">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
