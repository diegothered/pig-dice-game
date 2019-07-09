//player roll random roll generator
function myRoll() {
  var x = Math.floor((Math.random() * 6) + 1);
  document.getElementById("showRoll").innerHTML = x;
}

//Business Logic
// This is a constructor for Player to store all player info
function Player(playerOne, turnTotal, diceRoll, overallScore) {
  this.playerOne = playerOne,
  this.turnTotal = turnTotal,
  this.diceRoll = diceRoll,
  this.overallScore = overallScore
}

//prototype branching for possible player roll combinations
Player.prototype.roll = function () {
  if (x >= 2 && x <= 6) {

  }
  else {

  }
  return this.diceRoll;
}
