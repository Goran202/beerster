import React from 'react';

const Sort = () => (
  <div>
    Sort by:
    <select class="custom-select">
      <option selected>Name</option>
      <option value="1">IBU</option>
      <option value="2">ABV</option>
    </select>
  </div>
);

export default Sort;
