var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = []; // array to push user choices to
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //list of letters to choose from

document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //taking in user guess
    var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)]; //computer selects random letter
    guessesSoFar.push(userGuess); //pushing user guess to guesses so far
    if (userGuess == computerGuess) {
        wins++;
        guessesLeft = 9; //resets the guesses back to 9
        guessesSoFar.length = 0; //clears the guesses so far array, so that the guesses from the previous game don't appear
    }
    else if (guessesLeft == 0){
        losses++;
        guessesLeft = 9;
        guessesSoFar.length = 0;
    }
    //decreases guesses left
    else if (userGuess !== computerGuess){
        guessesLeft--; 
    }  
    // taking the totals and shows them in HTML    
    var html = 
    "<p>Wins: " + 
    wins + 
    "</p>" +
    "<p>Losses: " + 
    losses + 
    "</p>" +
    "<p>Guesses Left: " + 
    guessesLeft + 
    "</p>" +
    "<p>Your Guesses So Far: " +
    guessesSoFar +
    "</p>"
    ;
    // documenting the totals into the game ID
    document.querySelector('#game').innerHTML = html;
}