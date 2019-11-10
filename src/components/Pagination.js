import React from 'react';

const Pagination = (props) => {
  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <button
            class="page-link"
            value={parseInt(props.pageNumber) - 1}
            onClick={props.onPaginationButtonClick}
          >
            Previous
          </button>
        </li>
        <li class="page-item">
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
        </li>
        <li class="page-item">
          <button
            class="page-link"
            value={parseInt(props.pageNumber) + 1}
            onClick={props.onPaginationButtonClick}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
