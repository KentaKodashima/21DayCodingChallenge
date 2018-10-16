/*
## Challenge #16
That was outstanding! Now do the same thing with firstCurrent(). Don't reinvent the wheel here, re-use 
existing code. This is one of the most important skills you can build as a coder...er, uh, I mean 
Lighthouse operator.
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

function firstCurrent() {
  var currents = allCurrents()
  return currents[0]
}
