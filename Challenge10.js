/*
## Challenge #10
Your next job is to write a function so that your lighthouse can sweep a whole row of cells.

Write a function named lightRow() that takes in the number of the row and returns its contents. (Example: 
  lightRow(2); would return ["", "", "v", "", "~", "", "", "", "", ""])
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

function lightRow(numOfRow) {
  return GRID[numOfRow-1]
}