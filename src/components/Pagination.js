import React from 'react';
import uuid from 'uuid';

const Pagination = (props) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <button
            className="page-link"
            value={
              parseInt(props.pageNumber) - 1 <= 0 ? 1 : parseInt(props.pageNumber) - 1
            }
            onClick={(e) => props.onPaginationButtonClick(e, props.typeOfList)}
          >
            Previous
          </button>
        </li>
        {props.beerList
          .filter((beer, i) => i % 15 === 0)
          .map((beer, j) => (
            <li
              key={uuid.v4()}
              className={`page-item${
                parseInt(props.pageNumber) === j + 1 ? ' active' : ''
              }`}
            >
              <button
                className="page-link"
                value={j + 1}
                onClick={(e) => props.onPaginationButtonClick(e, props.typeOfList)}
              >
                {j + 1}
              </button>
            </li>
          ))}
        {/* <li class="page-item">
          <button
            class="page-link"
            value={parseInt(props.pageNumber)}
            onClick={props.onPaginationButtonClick}
          >
            {parseInt(props.pageNumber)}
          </button>
        </li>
        <li class="page-item">
          <button
            class="page-link"
            value={parseInt(props.pageNumber) + 1}
            onClick={props.onPaginationButtonClick}
          >
            {parseInt(props.pageNumber) + 1}
          </button>
        </li>
        <li class="page-item">
          <button
            class="page-link"
            value={parseInt(props.pageNumber) + 2}
            onClick={props.onPaginationButtonClick}
          >
            {parseInt(props.pageNumber) + 2}
          </button>
        </li> */}
        <li className="page-item">
          <button
            className="page-link"
            value={
              parseInt(props.pageNumber) * 15 >= props.beerList.length
                ? parseInt(props.pageNumber)
                : parseInt(props.pageNumber) + 1
            }
            onClick={(e) => props.onPaginationButtonClick(e, props.typeOfList)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
