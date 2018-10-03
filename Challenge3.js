const GRID = [
  ["", "", "", "^", "", "", "", "", "", ""],
  ["", "", "v", "", "~", "", "", "", "", ""],
  ["", "v", "", "", "^", "^", "", "", "", ""],
  ["", "", "", "", "^", "^", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "v", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "^", "~", "~", "", "", "", "^", "", ""],
  ["", "^", "", "~", "~", "", "", "", "", ""],
  ["", "^", "", "", "~", "~", "", "", "", ""],
];

function countRows() {
  let rowsNum = GRID.length
  return rowsNum
}

function countColumns() {
  let rowsNum = countRows()
  let colNum = GRID[rowsNum - 1].length
  return colNum
}

function gridSize() {
  let rowCount = countRows()
  let colCount = countColumns()

  return "" + colCount + " x " + rowCount
}