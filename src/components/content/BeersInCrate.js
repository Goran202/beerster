import React from "react";
import BeerInCrateImg from "./BeerInCrateImg";
import uuid from "uuid";

const BeersInCrate = ({ beersInCrateIds }) => (
  <div className="container">
    <div className="row">
      {beersInCrateIds.slice(0, 20).map((beer, i) => (
        <div
          className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3"
          style={{
            display: "inline-block",
            padding: "3px"
          }}
          key={uuid.v4()}
        >
          <BeerInCrateImg />
        </div>
      ))}
    </div>
  </div>
);

export default BeersInCrate;
