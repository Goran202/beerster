import React from 'react';

const Sort = (props) => (
  // <div>
  //   Sort by:

  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <label class="input-group-text" for="inputGroupSelect01">
        Sort by:
      </label>
    </div>
    <select class="custom-select" onChange={props.onSelectMenuChange}>
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
