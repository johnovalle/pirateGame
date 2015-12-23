'use strict';

var stage = document.querySelector("#stage");
var output = document.querySelector("output");

var map = [
  [0, 2, 0, 0, 0, 3],
  [0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 2, 0],
  [0, 2, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0]
];

var gameObjects = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [4, 0, 0, 0, 0, 0]
]

//Map code
var WATER = 0;
var ISLAND = 1;
var PIRATE = 2;
var HOME = 3;
var SHIP = 4;

var shipRow;
var shipColumn;

//size of each cell
var SIZE = 64;

//The number of rows and columns
var ROWS = map.length;
var COLUMNS = map[0].length;

function render() {
  if(stage.hasChildNodes()){
    for(var i = 0; i<ROWS * COLUMNS; i++){
      stage.removeChild(stage.firstChild);
    }
  }
  for(var row = 0; row < ROWS; row++){
    for(var column = 0; column < COLUMNS; column++){
      var cell = document.createElement("img");
      cell.setAttribute('class', "cell");
      stage.appendChild(cell);
      if(gameObjects[row][column] === SHIP){
        shipRow = row;
        shipColumn = column;
      }
      switch(map[row][column]){
        case WATER:
          cell.src = "images/water.png";
          break;
        case ISLAND:
          cell.src = "images/island.png";
          break;
        case PIRATE:
          cell.src = "images/pirate.png";
          break;
        case HOME:
          cell.src = "images/home.png";
          break;
      }
      switch(gameObjects[row][column]){
          case SHIP:
          cell.src = "images/ship.png";
          break;
      }
      
      cell.style.top = row * SIZE + "px";
      cell.style.left = column * SIZE + "px";
      
    }
  }
  
}
render();