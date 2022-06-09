import React from 'react';

const Pagination = ({ goPrev, goNext, itemsPerPage, totalItems, currentPage }) => {
  const isPrevPageAvailable = currentPage === 1;
  const isNextPageAvailable = currentPage === Math.ceil(totalItems / itemsPerPage);
  console.log(isNextPageAvailable);

  return (
    <div className="pagination">
      <button disabled={isPrevPageAvailable} onClick={() => goPrev()} className="btn">
        {isPrevPageAvailable ? null : '←'}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button disabled={isNextPageAvailable} onClick={() => goNext()} className="btn">
        {isNextPageAvailable ? null : '→'}
      </button>
    </div>
  );
};

export default Pagination;

/*
return (
    <div className="pagination">
        <button className="btn">←</button>
        <span className="pagination__page">3</span>
        <button className="btn">→</button>
    </div>
)
*/
