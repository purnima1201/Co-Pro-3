class HomeScreen {


  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.welcome = createElement('h2');
    this.info = createElement('h2');
    this.title = createElement('h2');
    this.socialDistancing=createSprite(displayWidth/2 + 10, 110,10,10);
    this.socialDistancing.addImage("sd.png",sd_image);
    this.enemy=createSprite( 200 , 200 , 5 , 5 );
    this.homeScreenPlayer=createSprite(1200,250,50,100);

    

  }
  hide(){
    this.homeScreenPlayer.visible=false;
    this.enemy.visible=false;
    this.socialDistancing.visible=false;
    this.welcome.hide();
    this.info.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }
  display(){
    
    this.title.html("Co_Protection");
    this.title.position(displayWidth/2 - 50, 0);

    this.socialDistancing.addImage("sd.png",sd_image);
    this.socialDistancing.scale=0.1;

    this.enemy.addImage("enemy.png",enemy_img);
    this.enemy.scale=1;
    

    
    this.homeScreenPlayer.addImage("player.png",player_img);
    this.homeScreenPlayer.scale=1.5;


    

    this.welcome.html("Hello Welcome To The game ")
    this.welcome.position(displayWidth/2 - 100, displayHeight/5);


    this.info.html(" To Start This Game Please Click On Play Button")
    this.info.position(displayWidth/2 - 180, displayHeight/4);


    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);


    this.button.position(displayWidth/2 + 20, displayHeight/2);
  

      this.button.mousePressed(()=>{  
        gameState=1;
      });

    
    

    drawSprites();
  }
    
}
