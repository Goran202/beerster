import React from "react";
import crate from "../../assets/crate.png";
import BeersInCrate from "./BeersInCrate";

const Crate = ({ beerList, onDropBeerToCrate, beersInCrateIds }) => (
  <>
    <ul className="nav">
      <li className="nav-item">
        <a
          className="nav-link disabled"
          href="#/home"
          style={{ padding: "5px" }}
        >
          <p>ONE</p>
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link disabled"
          href="#/home"
          style={{ padding: "5px" }}
        >
          <p>TWO</p>
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link disabled"
          href="#/home"
          style={{ padding: "5px" }}
        >
          <p>THREE</p>
        </a>
      </li>
    </ul>{" "}
    <div
      onDragOver={e => e.preventDefault()}
      onDrop={e => onDropBeerToCrate(e.dataTransfer.getData("text"))}
      className="rotatable"
      style={{
        display: "inline-block",
        position: "relative"
      }}
    >
      <img src={crate} alt="crate" style={{ maxWidth: "100%" }}></img>
      <div
        style={{
          position: "absolute",
          top: "0%",
          padding: "10px"
        }}
      >
        {/* <div className="container">
          <div className="row">
            <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3"> */}
        <BeersInCrate beerList={beerList} beersInCrateIds={beersInCrateIds} />
        {/* </div>
          </div>
        </div> */}
      </div>
    </div>
    <blockquote className="blockquote text-center">
      <p>Add a beer to have it appear in the crate.</p>
      <footer className="blockquote-footer">
        <cite title="Captain Obvious">Captain Obvious</cite>
      </footer>
    </blockquote>
  </>
);

export default Crate;
