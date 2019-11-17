import React from "react";
import illustration from "../../assets/illustration.png";
import button_primary from "../../assets/button_primary.png";
import SmallTitle from "./SmallTitle";
import BigTitle from "./BigTitle";
import "./jumbotron.css";

const JumbotronMediaQuery = ({ onJoinClick }) => {
  return (
    <div className="container">
      <SmallTitle />
      <br />
      <br />
      <br />
      <BigTitle />
      <img src={illustration} className="img-fluid" alt="illustration"></img>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#/join" onClick={onJoinClick}>
        {/* <button type="button" className="btn btn-outline-secondary btn-lg"></button> */}
        <img src={button_primary} alt="buttonPrimary"></img>
      </a>
    </div>
  );
};

export default JumbotronMediaQuery;
