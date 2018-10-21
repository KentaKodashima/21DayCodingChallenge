/*
## Challenge #21
Ship captains have heard of your prowess and want to know the length of their routes through your grid.

Write a function called calcDistance() which will take two coordinates in the form of 'A3' and calculate 
the distance between the two points.
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

function coordinateToXYValue(coordinate) {
  let XYArr = []
  let colIndex = convertColumn(coordinate[0])
  let num = coordinate.slice(1)
  let parsedInt = parseInt(num, 10) - 1
  XYArr.push(colIndex)
  XYArr.push(parsedInt)
  return XYArr
}

function calcDistance(coordinate1, coordinate2) {
  let point1 = coordinateToXYValue(coordinate1)
  let point2 = coordinateToXYValue(coordinate2)
  let distanceFormula = ((point2[0] - point1[0]) * 2) + ((point2[1] - point1[1]) * 2)
  let distance = Math.sqrt(distanceFormula).toFixed(2)
  return distance
}
console.log(calcDistance('A3', 'D5'))