const choices = {
    1: 'rock',
    2: 'paper', 
    3: 'scissors'
}

let min = 1;
let max = 3;

let playerOne;
let playerTwo;

function getRandomInteger(min,max){
    return Math.floor(Math.random() * (max-min + 1)) + min
}

function chooseRockPaperScissors() {
    let choiceNum = getRandomInteger(min,max);
    return choices[choiceNum]
}

playerOne = chooseRockPaperScissors()
playerTwo = chooseRockPaperScissors()


console.log(playerOne, playerTwo);

const playerOneWins = 'Player One wins the game!'
const playerTwoWins = 'Player Two wins the game!'
const tie = 'Its a tie! Try again...'


// scenarios
if(playerOne === 'rock' && playerTwo === 'rock') return console.log(tie);
if(playerOne === 'rock' && playerTwo === 'paper') return console.log(playerTwoWins)
if(playerOne === 'rock' && playerTwo === 'scissors') return console.log(playerOneWins)

if(playerOne === 'paper' && playerTwo === 'rock') return console.log(playerOneWins)
if(playerOne === 'paper' && playerTwo === 'paper') return console.log(tie)
if(playerOne === 'paper' && playerTwo === 'scissors') return console.log(playerTwoWins)

if(playerOne === 'scissors' && playerTwo === 'rock') return console.log(playerTwoWins)
if(playerOne === 'scissors' && playerTwo === 'paper') return console.log(playerOneWins)
if(playerOne === 'scissors' && playerTwo === 'scissors') return console.log(tie)

