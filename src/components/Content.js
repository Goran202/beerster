import React from 'react';
import Beers from './Beers';
import Crate from './Crate';

const Content = () => {
  return (
    <div className="container-fluid padding">
      <div className="row">
        <div class="col-xs-12 col-sm-12 col-md-7 col-lg-8 col-xl-8">
          <h2>BEER(s)</h2>
          <Beers />
        </div>
        <div class="col-xs-12 col-sm-12 col-md-5 col-lg-4 col-xl-4">
          <h2>CRATE</h2>
          <Crate />
        </div>
      </div>
    </div>
  );
};

export default Content;
