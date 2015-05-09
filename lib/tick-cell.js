function tickCell(state, liveNeighbours) {
  if (liveNeighbours === 3) {
    return 1;
  } else {
    return 0;
  }
}

module.exports = tickCell;