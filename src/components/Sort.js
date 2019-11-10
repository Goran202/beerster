import React from 'react';

const Sort = ({ onSelectMenuChange }) => (
  <div className="input-group mb-3">
    <div className="input-group-prepend">
      <label className="input-group-text" htmlFor="inputGroupSelect01">
        Sort by:
      </label>
    </div>
    <select className="custom-select" onChange={onSelectMenuChange}>
      <option value="name" defaultValue={'DEFAULT'}>
        Name
      </option>
      <option value="ibu">IBU</option>
      <option value="abv">ABV</option>
    </select>
  </div>
);

export default Sort;
