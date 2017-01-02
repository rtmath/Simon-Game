function Game(turns) {
  this.maxTurns = turns;
  this.turnsArray = [];
  for(var i = 0; i<turns; i++){
    this.turnsArray.push(Math.floor(Math.random()*4));
  }
}




exports.gameModule = Game;
