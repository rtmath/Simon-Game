(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Game = require('./../js/simon.js').gameModule;

function flicker(color) {
  $('#'+color).addClass('flicker');
  setTimeout(function(){
    $('#'+color).removeClass('flicker')
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

$(document).ready(function(){

  //color values
  const GREEN = 0;
  const RED = 1;
  const YELLOW = 2;
  const BLUE = 3;

  var newGame = new Game(10);

  loop(newGame.turnsArray, function(index,elem){
    switch (newGame.turnsArray[index]) {
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
    $('#output').append(newGame.turnsArray[index],'<br>');
  });

  $('#green').click(function(event) {
    event.preventDefault();
    flicker("green");
    $('#input').append(GREEN, '<br>');
  });

  $('#red').click(function(event) {
    event.preventDefault();
    flicker('red');
    $('#input').append(RED, '<br>');
  });

  $('#yellow').click(function(event) {
    event.preventDefault();
    flicker('yellow');
    $('#input').append(YELLOW, '<br>');
  });

  $('#blue').click(function(event) {
    event.preventDefault();
    flicker('blue');
    $('#input').append(BLUE, '<br>');
  });

});

},{"./../js/simon.js":2}],2:[function(require,module,exports){
function Game(turns) {
  this.maxTurns = turns;
  this.turnsArray = [];
  for(var i = 0; i<turns; i++){
    this.turnsArray.push(Math.floor(Math.random()*4));
  }
}




exports.gameModule = Game;

},{}]},{},[1]);
