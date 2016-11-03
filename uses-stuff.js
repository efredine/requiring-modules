"use strict;"
var secretKeeper = require('./exports-stuff');
["a", "b", "c", "d", "e"].forEach(function(guess, index){
  var attempt = secretKeeper.guess(guess);
  console.log("Attempt", index + 1, "Tried:", guess, "Got:", attempt.text);
  return !attempt.correct;
});

console.log("I can't see the secret:", secretKeeper.myPrivateVariable === undefined);