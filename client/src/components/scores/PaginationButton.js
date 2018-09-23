import React from 'react';

const PaginationButton = (props) => {
  return (
    <button
      className="pagination__button"
      onClick={() => props.onClick(props.paginationNumber)}
    >
      {props.paginationNumber}
    </button>
  );
};

export default PaginationButton;