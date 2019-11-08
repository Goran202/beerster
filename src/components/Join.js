import React from 'react';
import pattern_background from '../assets/pattern_background.png';
import button_primary from '../assets/button_primary.png';

const Join = () => {
  return (
    <>
      <h2>Vertical (basic) form</h2>
      <div
        className="container"
        style={{
          backgroundColor: 'white',
          backgroundImage: `url(${pattern_background})`,
        }}
      >
        <div>
          <h2>Vertical (basic) form</h2>
          <form action="/action_page.php">
            <div className="form-group">
              <label htmlFor="fullname">PERSONAL INFORMATION</label>
              <input
                type="fullname"
                className="form-control"
                id="fullname"
                placeholder="Full name"
                name="fullname"
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact">CONTACT INFORMATION</label>
              <input
                type="contact"
                className="form-control"
                id="contactEmail"
                placeholder="Email"
                name="contactEmail"
              />
              <input
                type="contactPhone"
                className="form-control"
                id="contactPhone"
                placeholder="Phone number"
                name="contactPhone"
              />
            </div>
            <hr></hr>

            <div className="form-group">
              <label htmlFor="rsvp">RSVP</label>
              <br />
              <label>
                <input type="radio" value="option1" />
                I.m coming!
              </label>
              <br />
              <label>
                <input type="radio" value="option1" />
                Maybe
              </label>
              <br />
              <label>
                <input type="radio" value="option1" />
                Can't make it
              </label>
              <br />
            </div>

            <div className="form-group">
              <label htmlFor="addText"></label>
              <textarea
                type="text"
                className="form-control"
                rows="6"
                id="addText"
                placeholder="Something you'd like to add?"
                name="addText"
              />
            </div>
            <hr></hr>

            <div className="form-group">
              <label htmlFor="cbox"></label>
              <div className="checkbox">
                <label>
                  <input type="checkbox" name="cbox" id="cbox" />
                  Let me know about future beerups!
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input type="checkbox" name="cbox" id="cbox" />
                  Remind me one day before this beerup!
                </label>
              </div>
            </div>

            <a href="#">
              {/* <button type="button" className="btn btn-outline-secondary btn-lg"></button> */}
              <img src={button_primary} alt="buttonPrimary"></img>
            </a>
          </form>
        </div>
      </div>
    </>
  );
};

export default Join;
