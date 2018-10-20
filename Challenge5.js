/*
## Challenge #5
Since our GRID is written in coordinates like A3 or D8, we need code that is going to be able to convert 
those coordinates to the numbers we need to fetch data out of the GRID array(s). All of the lighthouse 
operators have reported in and we know that their areas never go above Z.

Let's build a function called convertColumn() which, when given the coordinate as an argument, will return 
the number of the column.

For example, calling convertColumn('C4') should return 2 as the 'C' column is the third column, and since 
JavaScript arrays start at 0, that would make 2 the third column.
*/

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

function totalCells() {
  let rowCount = countRows()
  let colCount = countColumns()

  return rowCount * colCount
}

function convertColumn(coordinate) {
  let alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"]
  
  return alphabets.indexOf(coordinate[0])
}