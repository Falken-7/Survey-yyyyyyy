class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    opt1 = createSprite(100,200);
    opt1.addImage("opt1",c1);
    opt2 = createSprite(300,200);
    opt2.addImage("opt2",c2);
    opt3 = createSprite(500,200);
    opt3.addImage("opt3",c3);
    
    opt4 = createSprite(700,200);
    opt4.addImage("opt4",c4);
    opt  = [opt1,opt2,opt3,opt4];
  }

  play(){
    form.hide();
    //textSize(30);
    //text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      //background(ground);
      //image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
      var index = 0;
      var x = 150;
      var y;
     // var display_position = 130;
      for(var plr in allPlayers){
        index = index+1;
        x = x+200;
        y = displayHeight - allPlayers[plr].distance;
        opt[index-1].x = x;
        opt[index-1].y = y;
        if(index == player.index){
        camera.position.x = displayWidth/2;
        camera.position.y = opt[index-1].y;
        }
        
       }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
    if(player.distance > 3700){
gameState = 2;
    }
    drawSprites();
  }
end(){
  game.update(2);
}
}
