//player roll random roll generator
// function myRoll() {
//   var x = Math.floor((Math.random() * 6) + 1);
//   document.getElementById("showRoll").innerHTML = x;
// }

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
  this.tempscoreOne = 0;
  this.totalscoreOne = 0;
  this.turn = turn;
  this.playerName;
}
//created prototype with branching using player roll to end game and show alert
Player.prototype.rollone = function () {
  if (this.roll === 1) {
    this.tempscoreOne = 0;
    alert("Sorry " + this.playerName + ", you rolled a 1! Your turn is over!")
    }
    else {
      this.tempscoreOne += this.roll;
    }
  }
//created hold prototype to hold Player score
Player.prototype.hold = function() {
  this.totalscoreOne += this.tempscoreOne;
  this.tempscoreOne = 0;
}
//created winner prototype to "alert" player they won
Player.prototype.winnerCheck = function() {
  if (this.totalscoreOne >= 100) {
    alert("Congratulations," + this.playerName + " You Won!!");
  }
}
//created new game for player if they lose
Player.prototype.newGame = function() {
  this.roll = 0;
  this.tempscoreOne = 0;
  this.totalscoreOne = 0;
  this.playerName = "";
}
//created variable to cleat values after each turn
var clearValues = function() {
  $(".firstPlayer").val("");
  $(".secondPlayer").val("");
}
//user interface front end//
//
$(document).ready(function() {
  $(".gamePlay").hide();
  $("button#start").click(function(event) {
    player1 = new Player(true);
    player2 = new Player(false);
    $(".gamePlay").show();

    var firstPlayer = $(".firstPlayer").val();
    $("#firstPlayer").text(firstPlayer);

    var secondPlayer = $(".secondPlayer").val();
    $("#secondPlayer").text(secondPlayer);

    player1.playerName = firstPlayer;
    player2.playerName = secondPlayer;
});

$("button#new-game").click(function(event) {
  $(".gamePlay").hide();
  clearValues();
  player1.newGame();
  player2.newGame();
  $("#diceTotal").empty();
  $("#scoreOne").empty();
  $("#rolldice1").empty();
  $("#diceTotal2").empty();
  $("#scoreTwo").empty();
  $("#rollDice2").empty();

  $(".menu").show();
});

$("button#roll1").click(function(event) {
  player1.roll = rollDice();
  $("#rolldice1").text(player1.roll);
  player1.rollone();
  $("#diceTotal").text(player1.tempscoreOne);
});

$("button#roll2").click(function(event) {
  player2.roll = rollDice();
  $("#rolldice2").text(player2.roll);
  player2.rollone();
  $("#diceTotal2").text(player2.tempscoreOne);
});

$("button#player1-hold").click(function(event) {
  player1.hold();
  $("#scoreOne").text(player1.totalscoreOne);
  $("#diceTotal").empty();
  $("#rolldice1").empty();
  player1.winnerCheck();
});

$("button#hold1").click(function(event) {
  player2.hold();
  $("#scoreTwo").text(player2.totalscoreOne);
  $("#diceTotal2").empty();
  $("#rollDice2").empty();
  player2.winnerCheck();
  });
});
// debugger;
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
