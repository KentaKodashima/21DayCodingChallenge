/*
## Challenge #19
It's time for monthly reporting to Lighthouse HQ. Your supervisor calls you and tells you that they need a 
report of what percentage of your grid is rocks and what percentage has strong currents. This data should 
be sent as an array of two number values, in that specific order.

Write a function percentageReport() that returns the right percentages. (Example: calling percentageRepor()
should return the following array: [9.00, 7.00], as 10% of your GRID is rocks, and 7% is currents.) 
Your grid produces nice easy integers. However, not all grids will. Just to be certain, make sure your 
results always return 2 decimal places. This will really help ALL the Lighthouse9000™ operators.
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

function allRocks() {
  let rocks = []
  let alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"]
  for (let i = 0; i < GRID.length; i++) {
    for (let j = 0; j < GRID[i].length; j++) {
      if (GRID[i][j] == '^') {
        let coordinate = "" + alphabets[j] + (i + 1)
        rocks.push(coordinate)
      }
    }
  }
  return rocks
}

function allCurrents() {
  let currents = []
  let alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"]
  for (let i = 0; i < GRID.length; i++) {
    for (let j = 0; j < GRID[i].length; j++) {
      if (GRID[i][j] == '~') {
        let coordinate = "" + alphabets[j] + (i + 1)
        currents.push(coordinate)
      }
    }
  }
  return currents
}

function percentageReport() {
  let result = []
  let cells = totalCells()
  let rocks = allRocks().length
  let currents = allCurrents().length
  let numRocks = rocks / cells
  let numCurrents = currents / cells
  let rockPercentage = parseFloat(numRocks * 100).toFixed(2)
  let currentPercentage = parseFloat(numCurrents * 100).toFixed(2)
  result.push(rockPercentage)
  result.push(currentPercentage)
  return result
}
console.log(percentageReport())