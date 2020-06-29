var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var Emailid;
var database;

var form, player, game;
function preload(){
  backgroundImage=loadImage('background/download.jpg')
}

function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(backgroundImage)
  if(form.button.mousePressedOver){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
