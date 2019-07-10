//player roll random roll generator
function myRoll() {
  var x = Math.floor((Math.random() * 6) + 1);
  document.getElementById("showRoll").innerHTML = x;
}

//Business Logic
//declaring two variables named player 1 & 2 as empty strings
  var player1 = "";
  var player2 = "";
//variable for rolling dice set as a function to roll dice randomly from 1-6
  var rollDice = function() {
    return Math.floor(6 * Math.random()) + 1;
  }
// This is a constructor for Player to store all player info
function Player(turn) {
  this.roll = 0;
  this.tempScoreOne = 0;
  this.totalScoreOne = 0;
  this.turn = turn;
  this.playerName;
}
//branching using player roll to end game and show alert
Player.prototype.rollone = function () {
  if (this.roll ===1) {
    this.tempScoreOne = 0;
    alert("Sorry " + this.playerName + ", you rolled a 1! Your turn is over!")
    }
    else {
      this.tempScoreOne += this.roll;
    }
  }

Player.prototype.hold = function() {
  this.totalScoreOne += this.tempScoreOne;
  this.tempScoreOne = 0;
}

Player.prototype.winnerCheck = function() {
  if (this.totalScoreOne >= 100) {
    alert("Congradulations," + this.playerName + " You Won!!");
  }
}

Player.prototype.newGame = function() {
  this.roll = 0;
  this.tempScoreOne = 0;
  this.totalScoreOne = 0;
  this.playerName = "";
}

var clearScores = function() {
  $(".firstPlayer").val("");
  $(".secondPlayer").val("");
}
//user interface front end//
$(document).ready(function() {
  $(".console").hide();
  $("button#start").click(function(event) {
    player1 = new Player(true);
    player2 = new Player(false);
    $(".console").show();

    var firstPlayer = $(".firstPlayer").val();
    $("#firstPlayer").text(firstPlayer);

    var secondPlayer = $(".secondPlayer").val();
    $("#secondPlayer").text(secondPlayer);

    player1.playerName = firstPlayer;
    player2.playerName = secondPlayer;
});

$("button#new-game")
//prototype branching for possible player roll combinations
// Player.prototype.roll = function () {
//   var randomNo + Math.floor((Math.random() * 6 + 1;//Random generator from 1-6
//   this.diceRoll = randomNo;
//
//   if (x >= 2 && x <= 6) {
//
//   }
//   else {
//
//   }
//   return this.diceRoll;
// }
