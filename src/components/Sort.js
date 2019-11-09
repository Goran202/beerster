import React from 'react';

const Sort = (props) => (
  // <div>
  //   Sort by:

  <div className="input-group mb-3">
    <div className="input-group-prepend">
      <label className="input-group-text" htmlFor="inputGroupSelect01">
        Sort by:
      </label>
    </div>
    <select className="custom-select" onChange={props.onSelectMenuChange}>
      <option value="name" defaultValue={'DEFAULT'}>
        Name
      </option>
      <option value="ibu">IBU</option>
      <option value="abv">ABV</option>
    </select>
  </div>

  // </div>
);

export default Sort;
