
$(document).ready(function() {
  $('#dice').submit(function(event){

var diceRoll= new String;
var diceRoll = Math.floor(Math.random() * 6) + 1;

var diceRoll = Math.floor(Math.random() * 6) + 1;
  alert("You rolled a " + diceRoll);

if (diceRoll === 1) {
prompt("You have forfeited your chance");
}

});
});
