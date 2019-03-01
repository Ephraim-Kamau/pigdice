$(document).ready(function() {
  $('#dice').submit(function(event){

var diceRoll= new String;
var diceRoll = Math.floor(Math.random() * 6) + 1;

$("#scoreboard").text("You rolled a " + diceRoll);

if (diceRoll === 1) {
prompt("You have forfeited your chance");
}

  });
});
