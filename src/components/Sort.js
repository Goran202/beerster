import React from 'react';

const Sort = (props) => (
  <div>
    Sort by:
    <select class="custom-select" onChange={props.onSelectMenuChange}>
      <option value="name" selected>
        Name
      </option>
      <option value="ibu">IBU</option>
      <option value="abv">ABV</option>
    </select>
  </div>
);

export default Sort;
