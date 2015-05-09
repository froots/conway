function tickCell(state, liveNeighbours) {
  if (liveNeighbours === 3) return 1;
  if (liveNeighbours === 2) return state;
  return 0;
}

module.exports = tickCell;