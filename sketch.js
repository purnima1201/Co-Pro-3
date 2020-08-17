var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;

var homeScreen;
var player;
var player1;
var player_img;
var player1_img;

var game;

var socialDistancing_image;
var socialDistancing;

var road_img;
var road1_img;
var gamePlayer_img;

var gardenEntrence;
var gardenf;
var gardenf1;

var garden_img;
var virus;
var virus_img;

var life1,life2,life3,life4,life5;
var life1_img,life2_img,life3_img,life4_img,life5_img;

var life=5;



function preload(){


  life1_img=loadImage("images/life.png");
  life2_img=loadImage("images/life.png");
  life3_img=loadImage("images/life.png");
  life4_img=loadImage("images/life.png");
  life5_img=loadImage("images/life.png");

  road1_img=loadImage("images/Road.jpeg");
  road_img=loadImage("images/Road.jpeg");

  player_img=loadImage("images/player.png");
  player1_img = loadAnimation("images/player1.png","images/player2.png");
  gardenEntrence = loadAnimation("images/garden.png");
  gamePlayer_img=loadImage("images/player.png");

  enemy_img = loadImage("images/enemy.png");
  sd_image = loadImage("images/sd.png");

  garden_img=loadImage("images/garden.png");
  virus_img=loadImage("images/virus1.png");
  
  
}

function setup(){
  
  
  gardenEntrence = createSprite(155,-2712.5,200,400);
  gardenf = createSprite(250,-800,10,3400);
  gardenf1 = createSprite(250,-5160,10,4500);

  gardenf.visible=false;
  gardenf1.visible=false;
  

  canvas = createCanvas(displayWidth-30, displayHeight-160);
  game = new Game();
  game.start();
}


function draw(){
 
  
  player1.collide(gardenf);
  player1.collide(gardenf1);

  if(gameState == 1){
    clear();
    game.play();
  }
  if(gameState == 2){
    game.end();
  }
}
