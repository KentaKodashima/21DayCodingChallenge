/*
## Challenge #13
Environment Canada has called and wants a report sent to them of all the rocks and currents in your grid, 
for use in their latest map.

Write a function called allRocks() which when called will return an array of the coordinates of all the 
rocks in your grid. (Example: allRocks() should return ['D1', 'E3', 'F3', 'E4', 'F4', 'B8', 'H8', 'B9', 
'B10'])

Write a function called allCurrents() which, when called, will return an array of the coordinates of all 
the strong currents in your grid. (Example: allCurrents() should return ['E2', 'C8', 'D8', 'D9', 'E9', 
'E10', 'F10'])Ω
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
console.log(allRocks())

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
console.log(allCurrents())