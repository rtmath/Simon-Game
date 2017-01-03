function Game(turns) {
  this.maxTurns = turns;
  this.turnsArray = [];
  this.currentArray = [];
  for(var i = 0; i<turns; i++){
    this.turnsArray.push(Math.floor(Math.random()*4));
  }
  this.currentArray.push(this.turnsArray[0]);
}

Game.prototype.step = function(){
  this.currentArray.push(this.turnsArray[this.currentArray.length]);
};

Game.prototype.verifyInput = function(arrayToCheck, index){
  return (this.currentArray[index] === arrayToCheck[index]);
};

Game.prototype.clearCurrentArray = function() {
  this.currentArray.length = 0;
}

function Player(){
  this.playerArray = [];
}

Player.prototype.input = function(number){
  this.playerArray.push(number);
};
Player.prototype.clearArray = function(){
  this.playerArray.length = 0;
};


exports.gameModule = Game;
exports.playerModule = Player;
