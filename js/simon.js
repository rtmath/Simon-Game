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

Game.prototype.verifyInput = function(arrayToCheck){
  var equal = (this.currentArray.length == arrayToCheck.length && this.currentArray.every(function(element, index) {
    return element === arrayToCheck[index];
  }));
  if (equal && this.currentArray.length === this.turnsArray.length) {
    console.log("You win!");
  } else if (equal && this.currentArray.length < this.turnsArray.length) {
    this.step();
    console.log("Step");
  } else {
    console.log("You lose :(");
  }
}

function Player(){
  this.playerArray = [];
}

Player.prototype.input = function(number){
  this.playerArray.push(number);
};


exports.gameModule = Game;
exports.playerModule = Player;
