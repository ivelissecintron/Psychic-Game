var computerGuessOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = 0;

document.onkeyup = function(event) {

    varcomputerGuess = computerGuessOptions[Math.floor(Math.random() * computerGuessOptions.length)];

    var userGuess = event.key;

    if (userGuess === "a" || userGuess === "b" || userGuess === "c" || userGuess === "d" || userGuess === "e") {

        if(computerGuess === userGuess) {
            wins++;
        } else if(computerGuess === "a" && userGuess)

















