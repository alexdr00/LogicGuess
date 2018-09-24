/**
 * Divides data in order to create a pagination for the scores table (leaderboard).
 * @param {Array} data - Array of objects. Each object is a score.
 * @param {Integer} rowsPerPage - Number of rows each page will have
 * @return {Array} Array of objects. Each object has a key as index.
 * That index represents its place in the pagination.
 */
const createDataPagination = (data, rowsPerPage) => {
  const dataPagination = [];
  const numberOfRows = data.length;
  const numberOfPages = Math.ceil(numberOfRows / rowsPerPage);

  let sliceStart = 0;
  let sliceEnd = rowsPerPage;

  for (let index = 1; index <= numberOfPages; index++) {
    dataPagination.push(data.slice(sliceStart, sliceEnd));

    sliceStart += rowsPerPage;
    sliceEnd += rowsPerPage;
  }

  return dataPagination;
}


export default createDataPagination;