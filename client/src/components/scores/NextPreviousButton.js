import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NextPreviousButton = (props) => {
  const icon = props.previousOrNext === 'next' ? 'angle-right' : 'angle-left';

  return (
    <button
      className="pagination__button"
      onClick={() => props.onClick(
        props.previousOrNext,
        props.paginationPlace,
        props.scoresPagination
      )}
    >
      <FontAwesomeIcon icon={['fas', icon]} />
    </button>
  );
};

export default NextPreviousButton;