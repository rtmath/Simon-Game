var Game = require('./../js/simon.js').gameModule;
var Player = require('./../js/simon.js').playerModule;

function flicker(color) {
  $('#'+color).addClass('flicker');
  setTimeout(function(){
    $('#'+color).removeClass('flicker');
  },1000);
}

function loop(arr, take, period) {
    period = period || 1500;
    var i = 0;
    var interval = setInterval(function() {
        take(i, arr[i]);
        if (++i >= arr.length) { clearInterval(interval);}
    }, period);
}

function newSequence(currentArray){
  loop(currentArray, function(index,elem){
    switch (currentArray[index]) {
      case 0:
        flicker("green");
        break;
      case 1:
        flicker("red");
        break;
      case 2:
        flicker("yellow");
        break;
      case 3:
        flicker("blue");
        break;
      default:
        console.log("Error");
        break;
    }
    $('#output').append(currentArray[index],'<br>');
  });
  $('#output').append("-------------",'<br>');
}

$(document).ready(function(){

  //color values
  const GREEN = 0;
  const RED = 1;
  const YELLOW = 2;
  const BLUE = 3;

  var newGame = new Game(10);
  var newPlayer = new Player();
  var userInputs = 0;
  var gameover = false;

  newSequence(newGame.currentArray);

  $('.btn').click(function(event) {
    event.preventDefault();

    if (!gameover) {
      // console.log(userInputs + " " + newGame.currentArray.length);
      if (userInputs < newGame.currentArray.length) {
        newPlayer.input(parseInt($(this).attr('number')));
        // console.log(newGame.currentArray, newPlayer.playerArray);
        // console.log(newGame.verifyInput(newPlayer.playerArray));
        if (newGame.verifyInput(newPlayer.playerArray, userInputs)) {
          userInputs++;
        } else {
          gameover = true;
          console.log("You lost!");
        }
      }
      if (!gameover && userInputs === newGame.currentArray.length) {
        userInputs = 0;
        newGame.step();
        newPlayer.clearArray();
        newSequence(newGame.currentArray);
      }
    }
  });
});
