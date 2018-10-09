/*
## Challenge #9
And last, but certainly not least, there are cells with ships in them! We need to be able to query any 
cell in our GRID area and find out if it is occupied by a ship.

Write a function called isShip() which will take in a coordinate in the form of 'I9' and return a true or 
a false boolean value depending on whether there is a ship in that cell or not. (Example: isShip('B3') 
would return true)
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

function isShip(coordinate) {
  if (lightCell(coordinate) == 'v') {
    return true
  } else {
    return false
  }
}