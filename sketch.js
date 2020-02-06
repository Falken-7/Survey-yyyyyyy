var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var opt,opt1,opt2,opt3,opt4;
function preload(){
 
}
function setup(){
  canvas = createCanvas(displayWidth-40,displayHeight-80);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  
}
