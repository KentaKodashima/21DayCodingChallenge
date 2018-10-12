/*
## Challenge #12
The weekend lighthouse operator isn't as smart as you are, and sometimes tells the Lighthouse9000™ system 
to do invalid things, causing the repairman to have to come out and fix the lighthouse. Upgrade the 
lightCell() method so that if an invalid cell is passed in, it returns false. (Example: lightCell('Z3'); 
would return false as would lightCell('A11');)
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

  if (colIndex < 0) {
    return false
  } else if (coordinate[2] != undefined) {
    return false
  }
  return true
}