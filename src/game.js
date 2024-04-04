//***** Rock Paper Scissors *****//

// constants
const player1Wins = 'Player 1 Wins!'
const player2Wins = 'Player 2 Wins!'
const tie = `It's a tie!`

const randomChoice = () => {
    const gameMap = {
        0: 'rock',
        1: 'paper', 
        2: 'scissors'
    }
    const choice = Math.floor(Math.random() * 3);
    return gameMap[choice];
}   

const displayMessage = (message) => console.log(message);
    
const winner = (player1, player2) => {
    if(player1 === player2) return displayMessage(tie);
    if(player1 === 'rock' && player2 === 'paper') return displayMessage(player2Wins)
    if(player1 === 'rock' && player2 === 'scissors') return displayMessage(player1Wins)
    if(player1 === 'paper' && player2 === 'rock') return displayMessage(player1Wins)
    if(player1 === 'paper' && player2 === 'scissors') return displayMessage(player2Wins)
    if(player1 === 'scissors' && player2 === 'rock') return displayMessage(player2Wins)
    if(player1 === 'scissors' && player2 === 'paper') return displayMessage(player1Wins)
}

const startGame = () => {
    const player1 = randomChoice()
    const player2 = randomChoice()

    console.log('Player 1: ', player1);
    console.log('Player 2: ', player2);
    
    winner(player1, player2)
}

startGame()