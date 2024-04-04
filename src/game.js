//***** Rock Paper Scissors *****//

// constants
const player1Wins = 'Player 1 Wins!'
const player2Wins = 'Player 2 Wins!'
const tie = `It's a tie!`

let p1Score = 0;
let p2Score = 0;

const randomChoice = () => {
    const gameMap = {
        0: 'rock',
        1: 'paper', 
        2: 'scissors'
    }
    const choice = Math.floor(Math.random() * 3);
    return gameMap[choice];
}   

const winner = (player1, player2) => {
    if(player1 === player2) return tie;
    if(player1 === 'rock' && player2 === 'paper') return player2Wins
    if(player1 === 'rock' && player2 === 'scissors') return player1Wins
    if(player1 === 'paper' && player2 === 'rock') return player1Wins
    if(player1 === 'paper' && player2 === 'scissors') return player2Wins
    if(player1 === 'scissors' && player2 === 'rock') return player2Wins
    if(player1 === 'scissors' && player2 === 'paper') return player1Wins
}

const startRound = () => {
    const player1 = randomChoice()
    const player2 = randomChoice()

    console.log('Player 1: ', player1);
    console.log('Player 2: ', player2);

    let result = winner(player1, player2)
    console.log(result);
    score(result)

    console.log('p1 score: ', p1Score);
    console.log('p2 score: ', p2Score);
}

const score = (result) => {
    if(result === tie) return;
    (result === player1Wins) ? p1Score++ : p2Score++
}

const startGame = (rounds) => {
    for(let i = 1; i <= rounds; i++){
        console.log(`Round ${i}`);
        startRound()
    }
}

startGame(10)
