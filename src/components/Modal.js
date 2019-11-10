import React from 'react';
import HeartImage from './HeartImage';
import closeIcon from '../assets/Close_icon@2x.png';

const Modal = ({ beer, onCheckBoxChange, onModalButtonClick }) => {
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
        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header" style={{ borderBottom: '0 none' }}>
              {/* <h5 class="modal-title">Modal title</h5> */}
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <img src={closeIcon} className="img-fluid" alt="closeIcon"></img>
              </button>
            </div>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              style={{ position: 'absolute', zIndex: '3' }}
              onClick={() => onCheckBoxChange(beer)}
            >
              <HeartImage isChecked={beer.isChecked} />
            </a>
            <div className="modal-body">
              <div className="card" style={{ border: 'none' }}>
                <div className="row no-gutters">
                  <div className="col-2" style={{ paddingTop: '40px' }}>
                    <img className="card-img-top" src={beer.image_url} alt="Card" />
                  </div>

                  <div className="col-10">
                    <div className="card-body">
                      <h4 className="card-title">{beer.name}</h4>
                      <p className="card-text">IBU: {beer.ibu}%</p>
                      <p className="card-text">ABV: {beer.abv}%</p>
                      <p className="card-text">
                        INGREDIENTS: <br />
                        HOPS: {beer.ingredients.hops.map((item) => item.name + ', ')}
                        <br />
                        MALT: {beer.ingredients.malt.map((item) => item.name + ', ')}
                        <br />
                        YEAST:{beer.ingredients.yeast}
                        <br />
                      </p>
                      <p className="card-text">{beer.description}</p>

                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => onModalButtonClick(beer)}
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
      </div>
    </>
  );
};

export default Modal;
