import React from 'react';

const Sort = (props) => (
  // <div>
  //   Sort by:

  <div classname="input-group mb-3">
    <div classname="input-group-prepend">
      <label classname="input-group-text" for="inputGroupSelect01">
        Sort by:
      </label>
    </div>
    <select classname="custom-select" onChange={props.onSelectMenuChange}>
      <option value="name" selected>
        Name
      </option>
      <option value="ibu">IBU</option>
      <option value="abv">ABV</option>
    </select>
  </div>

  // </div>
);

export default Sort;
