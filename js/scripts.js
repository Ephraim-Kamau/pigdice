$(document).ready(function() {
  $('#dice').submit(function(event){
  event.preventDefault();

var diceRoll= new String;
var diceRoll = Math.floor(Math.random() * 6) + 1;

$("#output").text(diceRoll);

if (diceRoll === 1) {
$("#output").text(diceRoll + "." + "You have forfeited your chance");
}

  });
});
