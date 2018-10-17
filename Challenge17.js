/*
## Challenge #17
Transport Canada called back. They want something similar to what you did for firstRock() and firstCurrent
() but they want both the first AND the last ship in your area.

Write a function called shipReport() which does not take any parameters, but will return an array of the 
coordinates of the ship furthest to the west (left) and east (right) of your GRID. (Example: shipReport() 
would return ['B3', 'J10'].)
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

function allShips() {
  let ships = []
  let alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"]
  for (let i = 0; i < GRID.length; i++) {
    for (let j = 0; j < GRID[i].length; j++) {
      if (GRID[i][j] == 'v') {
        let coordinate = "" + alphabets[j] + (i + 1)
        ships.push(coordinate)
      }
    }
  }
  return ships
}

function shipReport() {
  let ships = allShips()
  let westAndEeast = [ships[0], ships[ships.length - 1]]
  return westAndEeast
}