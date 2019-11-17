import React from 'react';
import uuid from 'uuid';

const Pagination = ({ pageNumber, typeOfList, beerList, onPaginationButtonClick }) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <button
            className="page-link"
            value={parseInt(pageNumber) - 1 <= 0 ? 1 : parseInt(pageNumber) - 1}
            onClick={(e) => onPaginationButtonClick(e, typeOfList)}
          >
            Previous
          </button>
        </li>
        {beerList
          .filter((beer, i) => i % 15 === 0)
          .map((beer, j) => (
            <li
              key={uuid.v4()}
              className={`page-item${parseInt(pageNumber) === j + 1 ? ' active' : ''}`}
            >
              <button
                className="page-link"
                value={j + 1}
                onClick={(e) => onPaginationButtonClick(e, typeOfList)}
              >
                {j + 1}
              </button>
            </li>
          ))}
        <li className="page-item">
          <button
            className="page-link"
            value={
              parseInt(pageNumber) * 15 >= beerList.length
                ? parseInt(pageNumber)
                : parseInt(pageNumber) + 1
            }
            onClick={(e) => onPaginationButtonClick(e, typeOfList)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
