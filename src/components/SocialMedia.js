import React from "react";

const SocialMedia = () => {
  return (
    <div
      className='social'
      style={{
        minWidth: "9vw",
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href='#'>
        <i
          className='fab fa-facebook'
          style={{
            fontSize: "1.7em",
            color: "white"
          }}
        ></i>
      </a>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href='#'>
        <i
          className='fab fa-twitter'
          style={{
            fontSize: "1.7em",
            color: "white"
          }}
        ></i>
      </a>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href='#'>
        <i
          className='fab fa-linkedin'
          style={{
            fontSize: "1.7em",
            color: "white"
          }}
        ></i>
      </a>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href='#'>
        <i
          className='fab fa-pinterest'
          style={{
            fontSize: "1.7em",
            color: "white"
          }}
        ></i>
      </a>
    </div>
  );
};

export default SocialMedia;
