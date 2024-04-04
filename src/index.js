const choices = {
    0: 'rock',
    1: 'paper', 
    2: 'scissors'
}

let min = 0;
let max = 2;

function getRandomInteger(min,max){
    return Math.floor(Math.random() * (max-min + 1)) + min
}

function chooseRockPaperScissors() {
    let choiceNum = getRandomInteger(min,max);
    return choices[choiceNum]
}

const displayMessage = (message) => console.log(message);

let playerOne = chooseRockPaperScissors()
let playerTwo = chooseRockPaperScissors()


console.log('Player 1: ', playerOne);
console.log('Player 2: ', playerTwo);


const playerOneWins = 'Player One wins the game!'
const playerTwoWins = 'Player Two wins the game!'
const tie = 'Its a tie! Try again...'


// scenarios
if(playerOne === 'rock' && playerTwo === 'rock') return displayMessage(tie);
if(playerOne === 'rock' && playerTwo === 'paper') return displayMessage(playerTwoWins)
if(playerOne === 'rock' && playerTwo === 'scissors') return displayMessage(playerOneWins)

if(playerOne === 'paper' && playerTwo === 'rock') return displayMessage(playerOneWins)
if(playerOne === 'paper' && playerTwo === 'paper') return displayMessage(tie)
if(playerOne === 'paper' && playerTwo === 'scissors') return displayMessage(playerTwoWins)

if(playerOne === 'scissors' && playerTwo === 'rock') return displayMessage(playerTwoWins)
if(playerOne === 'scissors' && playerTwo === 'paper') return displayMessage(playerOneWins)
if(playerOne === 'scissors' && playerTwo === 'scissors') return displayMessage(tie)

