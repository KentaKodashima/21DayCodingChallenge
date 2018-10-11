/*
## Challenge #11
Now that you can return the contents of the cells of a row, we also need to be able to return the cells of 
a column.

Write a function called lightColumn() that takes in the letter of the column from the grid, and returns an 
array that is the contents of that grid column. (Ex: lightColumn('C'); would return ["", "", "", "", "", 
"", "", "~", "", ""])
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

function lightColumn(letter) {
  let colArr = Array()
  let colNum = convertColumn(letter)
  for (let i = 0; i < GRID.length; i++) {
    colArr.push(GRID[i][colNum])
  }
  return colArr
}