/*
## Challenge #8
There are also areas where the currents are too strong for boats to be effective, and boats run the risk 
of being smashed up against the rocks if they get caught here. Strong currents are indicated with the ~ 
symbol.

Write a function called isCurrent() which will take in a coordinate in the form of 'A4' and return a true 
or a false boolean value depending on whether there is a strong current in that cell or not. (Example: 
isCurrent('E2'); would return true)
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
  let persedInt = parseInt(coordinate[1], 10) - 1
  let colIndex = convertColumn(coordinate[0])
  return GRID[persedInt][colIndex]
}

function isCurrent(coordinate) {
  if (lightCell(coordinate) == '~') {
    return true
  } else {
    return false
  }
}