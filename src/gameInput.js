//***** Rock Paper Scissors *****//
const prompt = require('prompt-sync')({sigint: true});

// constants
const userWins = 'You win this round!'
const computerWins = 'You lose this round!'
const tie = `It's a tie! Try again...`

const displayErrorMessage = (message) => console.log(message);
const drawLine = () => console.log('-----------------------------------');

let userScore = 0;
let computerScore = 0;

const randomChoice = () => {
    const gameMap = {
        0: 'rock',
        1: 'paper', 
        2: 'scissors'
    }
    const choice = Math.floor(Math.random() * 3);
    return gameMap[choice];
}   

const startRound = () => {
    const user = prompt('Rock Paper or Scissors? ')
    const computer = randomChoice()
    
    console.log(`You chose ${user}! The computer chose ${computer}!`);
    
    let result = winner(user, computer)
    console.log(result);
    score(result)
    
    console.log(`Your Score: ${userScore} | Computers Score: ${computerScore}`);
}

const winner = (user, computer) => {
    if(user === computer) return tie;
    if(user === 'rock' && computer === 'paper') return computerWins
    if(user === 'rock' && computer === 'scissors') return userWins
    if(user === 'paper' && computer === 'rock') return userWins
    if(user === 'paper' && computer === 'scissors') return computerWins
    if(user === 'scissors' && computer === 'rock') return computerWins
    if(user === 'scissors' && computer === 'paper') return userWins
}

const score = (result) => {
    if(result === tie) return;
    (result === userWins) ? userScore++ : computerScore++
}

const startGame = () => {
    const numRounds = prompt('How many rounds would you like to play? ')
   
    for(let i = 1; i <= Number(numRounds); i++){
        drawLine()
        console.log(`Round ${i}`);
        drawLine()
        startRound()
    }
    
    endGame(userScore,computerScore)
}

const endGame = (userScore, computerScore) => {
    drawLine()
    console.log('The game is over! Here are the final results...');

    if(userScore > computerScore) console.log(`You won with a score of ${userScore}! Congrats!`);
    else if(userScore < computerScore) console.log(`You lost to the computer! Womp Womp..`);
    else console.log(`The final score is a TIE! NOBODY WINS MUAHAHAHA!`);

    drawLine()
}


startGame()
