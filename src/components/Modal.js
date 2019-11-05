import React from 'react';

const Modal = (props) => {
  console.log(props);

  return (
    <>
      {/* <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Launch demo modal
      </button> */}

      {/* First modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        {/* <div className="modal-content">
          <div className="card" style={{}}>
            <input type="checkbox"></input>
            <img
              style={{}}
              className="card-img-top"
              // src="https://images.punkapi.com/v2/192.png"
              // src={props.beer.image_url}
              alt="Card"
            />
            <div className="card-body">
              <h4 className="card-title">{props.beer.name}</h4>
              <p className="card-text">IBU: {props.beer.ibu}%</p>
              <p className="card-text">ABV: {props.beer.abv}%</p>
            </div>
          </div>
        </div> */}

        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div class="container-fluid">
              <div class="row"></div>
              <div className="card" style={{}}>
                <input type="checkbox"></input>
                <img className="card-img-top" src={props.beer.image_url} alt="Card" />
                <div className="card-body">
                  <h4 className="card-title">{props.beer.name}</h4>
                  <p className="card-text">IBU: {props.beer.ibu}%</p>
                  <p className="card-text">ABV: {props.beer.abv}%</p>
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
