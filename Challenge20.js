/*
## Challenge #20
Lighthouse HQ also wants a report of the safety of your GRID. Write another function called `safetyReport()
` which will return your GRID with all of the values replaced by the percentage for how dangerous they 
are. The percentages for how dangerous a cell is were established in question #18.
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

function convertColumn(coordinate) {
  let alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"]
  
  return alphabets.indexOf(coordinate[0])
}

function lightCell(coordinate) {
  let colIndex = convertColumn(coordinate[0])
  let num = coordinate.slice(1)
  let parsedInt = parseInt(num, 10) - 1
  return GRID[parsedInt][colIndex]
}

function isRock(coordinate) {
  if (lightCell(coordinate) == '^') {
    return true
  } else {
    return false
  }
}

function isCurrent(coordinate) {
  if (lightCell(coordinate) == '~') {
    return true
  } else {
    return false
  }
}

function howDangerous(coordinate) {
  if (isRock(coordinate)) {
    return 100
  } else if (isCurrent(coordinate)) {
    return 50
  } else {
    return 0
  }
}

function safetyReport() {
  let alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"]
  return GRID.map(function(row, rowIndex) {
    return row.map(function(col, colIndex) {
      let coordinate = alphabets[colIndex] + (rowIndex + 1)
      return howDangerous(coordinate)
    })
  })
}
console.log(safetyReport())