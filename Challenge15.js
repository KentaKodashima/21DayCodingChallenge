/*
## Challenge #15
Here is an opportunity to prove how powerful your Lighthouse-powering skills are! Write a function called 
firstRock() which will return the coordinates of the first rock in your grid. Consider how you might use 
one of your previously written functions to simplify your task!
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

function firstRock() {
  var rocks = allRocks()
  return rocks[0]
}