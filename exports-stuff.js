"use strict";
var myPrivateVariable = "my module's secret";
var guesses = 0;
const GUESSES_ALLOWED = 3;
function privateFunction() {
  return myPrivateVariable;
}
function guess(text) {
  guesses += 1;
  if (guesses > GUESSES_ALLOWED) {
    return {correct: false, guesses: guesses, text: "You're done"};
  }
  else if (text === privateFunction()) {
    return {correct: true, guesses: guesses, text: "You lucky bastard."};
  }
  else {
    return {correct: false, guresses: guesses, text: "Not on your life"};
  }
}

module.exports = {
  guess: guess,
  maxGuesses: GUESSES_ALLOWED
}