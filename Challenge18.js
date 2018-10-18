/*
## Challenge #18
Ship captains are really starting to rely on you to plot their routes through your area. Your name is 
being sung in pubs and taverns up and down the coast. And this time, it's for the right reasons! The ship 
captains are starting to be curious about some of the cells in your grid, and what they want is to know 
how dangerous a particular cell is. They know if ones are safe, but sometimes, they are willing to accept 
a bit of danger so that they can get a faster delivery time.

A cell is considered dangerous if there is a rock or a strong current in it. However, a cell with rocks in 
it would be 100% dangerous, while strong currents are only 50% dangerous. Write a function called 
howDangerous() that will take a cell in the format 'G7' and return a number value for how dangerous the 
cell is. (Example: howDangerous('E2') will return 50 where howDangerous('E3') will return 100.)
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