//Initialize variables
const letterBank = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let numberOfWins = 0 // Record of the number of wins
let numberOfLoses = 0 // Record of the number of loses
let numberOfGuesses = 9 // May want to update this later to be variable difficutly
let guessesMade = []; // Record the guesses in this variable
let userLetter; //Store user input

let myLetter = letterBank[Math.floor(Math.random() * letterBank.length)] // Initialize myLetter

let spanWinCounter = document.getElementById('winCounter')
let spanLossCounter = document.getElementById('loseCounter')
let spanGuessCounter = document.getElementById('guessCounter')
let spanGuessTracker = document.getElementById('guessTracker')
let status = document.getElementById('gameStatus')

// Testing only. Comment out before submitting
// document.getElementById('letterGenerated').innerHTML = `<span>${myLetter}</span>`;

// End Testing script

// Initilize counters
initializeGame()

// Record user input
document.onkeyup = function(event){
    console.log(event)
    //if valid keyboard press run the game
    if (event.keyCode >= 65 && event.keyCode <= 90){
        //Process user keyboard input
        processUserInput(event.key)
    }
    // if keyboard press is invalid
    else
    console.log('Invalid input')

    pageUpdate()
}

function initializeGame(){
    console.log("running initializeGame")
    numberOfGuesses = 9; // May want to update this later to be variable difficutly
    guessesMade.length = 0; // Record the guesses in this variable

    spanWinCounter.innerHTML = numberOfWins
    spanLossCounter.innerHTML = numberOfLoses
    spanGuessCounter.innerHTML = numberOfGuesses
    spanGuessTracker.innerHTML = guessesMade
    
    // generate a new letter
    myLetter = letterBank[Math.floor(Math.random() * letterBank.length)];
    console.log(`setting computer letter to: ${myLetter}`)
}

function processUserInput(x){
    console.log("running processUserInput")

    if(numberOfGuesses !== 0){   
        console.log(`user input is ${x}`)

        //compare user input to the letter
        compareLetters(event.key)
    }
    else{
        status.innerHTML = `You've run out of guesses! Generating a new letter!`
        initializeGame()
    }
}

function compareLetters(x){
    console.log(`running compareLetters. Input letter is ${x}`)
    console.log(`computer letter is ${myLetter}`)
    
    //Let currentLetter be a boolean to compare if the letter was already used.
    if (guessesMade.includes(x)){
        console.log(`you have already used letter ${x}`)
    }
    else{
        //add the parsed user input to the array guesses made
        guessesMade.push(x)

        // Check if letter is correct
        if(x === myLetter){
            // decrease the number of guesses
            numberOfGuesses--
            console.log("letters are equal")
            status.innerHTML = `Correct!`

            // increase number of wins by 1
            numberOfWins++
            
            // Reinitialize the game
            initializeGame()
        }
        else{ // if letter is wrong
            // decrease the number of guesses
            numberOfGuesses--

            console.log(`Letters are not equal`)
            status.innerHTML = `Guess Again!`

            // increment numberOfLoses
            numberOfLoses++

            
        }
    }
}

function pageUpdate() {
    // display the decrement of numberOfGuesses
    spanGuessCounter.innerHTML = numberOfGuesses

    // display the user's input onto the webpage
    spanGuessTracker.innerHTML = guessesMade

    // display on the webpage
    spanWinCounter.innerHTML = numberOfWins

    // display the increment of numberOfLoses
    spanLossCounter.innerHTML = numberOfLoses
}   
