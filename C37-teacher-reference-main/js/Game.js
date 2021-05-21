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
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getplayerinfo();
    if (allplayers !==undefined){
      var display_position  = 130;
      for(var plr in allplayers){
          if(plr === "player"+player.index){
            fill("red");
          }
          else{
            fill("black");
          }
          display_position+=40;
          text(allplayers[plr].name+" : "+allplayers[plr].distance,120,display_position);
      }
    }
     
   
}
}