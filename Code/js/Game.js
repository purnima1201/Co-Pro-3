class Game {
  constructor(){
   
  }


  async start(){
    if(gameState === 0){
      
      homeScreen = new HomeScreen()
      homeScreen.display();
    }

    player1 = createSprite(displayWidth/2,100);
    player1.addAnimation("player.gif",player1_img);
    life1=createSprite(40,-130);
    life2=createSprite(55,-130);
    life3=createSprite(65,-130);
    life4=createSprite(75,-130);
    life5=createSprite(85,-130);
    life1.visible= false;
    life2.visible= false;
    life3.visible= false;
    life4.visible= false;
    life5.visible= false;

   // console.log(life)
    
  }

  play(){
        
    homeScreen.hide();
    background(rgb(0,100,0));
    

    virus=createSprite(displayWidth/2,400);
    textSize(50);
    textFont("Georgia");
    fill("yellow");

    virus.addImage("virus1.png",virus_img);
    virus.scale=0.1;
    virus.setCollider("circle",0,0,30);
    
    gardenEntrence.addImage("garden.png",garden_img);
    gardenEntrence.scale=0.5;
    
    camera.position.x = player1.x;
    camera.position.y = player1.y;

    image(road_img,displayWidth/6,-displayHeight*4,1036,displayHeight*5);
    image(road1_img,displayWidth/6,-displayHeight*9,1036,displayHeight*5);
    
    player1.depth=1;
    gardenEntrence.depth=7;
    
    life1.visible= true;
    life2.visible= true;
    life3.visible= true;
    life4.visible= true;
    life5.visible= true;

    life1.addImage("life.png",life1_img);
    life1.scale=0.03;
    life1.y=player1.y-300;
    life1.x=player1.x;
    
    life2.addImage("life.png",life2_img);
    life2.scale=0.03;
    life2.y=player1.y-300;
    life2.x=player1.x+10;

    life3.addImage("life.png",life3_img);
    life3.scale=0.03;
    life3.y=player1.y-300;
    life3.x=player1.x+20;
    
    life4.addImage("life.png",life4_img);
    life4.scale=0.03;
    life4.y=player1.y-300;
    life4.x=player1.x+30;

    life5.addImage("life.png",life5_img);
    life5.scale=0.03;
    life5.y=player1.y-300;
    life5.x=player1.x+40;

    if(life < 5){
      life1.visible=false;
      life2.visible=false;
      life3.visible=false;
      life4.visible=false;
      life5.visible=false;
    }

    if(keyWentDown(UP_ARROW) ){
      player1.velocityY = -20;
    }
    else if(keyWentUp(UP_ARROW) ){
      player1.velocityY = 0;
    }

    if(keyWentDown(DOWN_ARROW) ){
      player1.velocityY = 17.5;
    }
    else if(keyWentUp(DOWN_ARROW) ){
      player1.velocityY = 0;
    }

    if(keyWentDown(LEFT_ARROW) ){
      player1.velocityX = -15;
    }
    else if(keyWentUp(LEFT_ARROW) ){
      player1.velocityX = 0;
    }

    if(keyWentDown(RIGHT_ARROW) ){
      player1.velocityX = 15;
    }
    else if(keyWentUp(RIGHT_ARROW) ){
      player1.velocityX = 0;
    }
    if (player1.isTouching(virus)) {
      life=life-2;
    }
    
    
    drawSprites();
    text("life: "+ life, player1.x-50, player1.y-160);
  }
}