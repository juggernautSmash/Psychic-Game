//Initialize variables
const letterBank = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let numberOfWins = 0 // Record of the number of wins
let numberOfLoses = 0 // Record of the number of loses
let numberOfGuesses = 9 // May want to update this later to be variable difficutly
let guessesMade = []; // Record the guesses in this variable
let userLetter; //Store user input

let myLetter = letterBank[Math.floor(Math.random() * letterBank.length)]; // The letter to match

// Grab user input
// guessesMade = document.getElementById('guessTracker')

// Testing only. Comment out before submitting
// document.getElementById('letterGenerated').innerHTML = `<span>${myLetter}</span>`;

// End Testing script

// Initilize counters
initializeGame()

// Record user input
document.onkeyup = function(event){
    console.log(event)
    //if valid keyboard press
    if (event.keyCode >= 65 && event.keyCode <= 90){

        //Process user keyboard input
        processUserInput(event.key)

        // display the user's input onto the webpage
        

        compareLetters(event.key)
    }
    // if keyboard press is invalid
    else
    console.log('Invalid input')
}

function initializeGame(){
    console.log("running initializeGame")
    numberOfGuesses = 9; // May want to update this later to be variable difficutly
    guessesMade.length = 0; // Record the guesses in this variable

    document.getElementById('winCounter').innerHTML = `<span>${numberOfWins}</span>`
    document.getElementById('loseCounter').innerHTML = `<span>${numberOfLoses}</span>`
    document.getElementById('guessCounter').innerHTML = `<span>${numberOfGuesses}</span>`
    document.getElementById('guessTracker').innerHTML = `<span>${guessesMade}</span>`
    
    // generate a new letter
    myLetter = letterBank[Math.floor(Math.random() * letterBank.length)];
    console.log(`setting computer letter to: ${myLetter}`)
}

function processUserInput(x){
    console.log("running processUserInput")
    
    //add the parsed user input to the array guesses made
    guessesMade.push(x)

    // decrease the number of guesses
    numberOfGuesses--

    // display the decrement of numberOfGuesses
    document.getElementById('guessCounter').innerHTML = `<span>${numberOfGuesses}</span>`

    // display the user's input onto the webpage
    document.getElementById('guessTracker').innerHTML = `<span>${guessesMade}</span>`
    console.log(`user input is ${x}`)
}

function compareLetters(x){
    console.log(`running compareLetters. Input letter is ${x}`)
    console.log(`computer letter is ${myLetter}`)
    if(x === myLetter){
        console.log("letters are equal")
        // increase number of wins by 1
        numberOfWins++

        // display on the webpage
        document.getElementById('winCounter').innerHTML = `<span>${numberOfWins}</span>`

        // Reinitialize the game
        initializeGame()
        document.getElementById('gameStatus').innerHTML = `<span>Correct!</span>`
    }
    else{
        console.log(`Letters are not equal`)
        document.getElementById('gameStatus').innerHTML = `<span>Guess Again!</span>`

        // increment numberOfLoses
        numberOfLoses++

        // display the increment of numberOfLoses
        document.getElementById('loseCounter').innerHTML = `<span>${numberOfLoses}</span>`
    }
}