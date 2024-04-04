const choices = {
    1: 'Rock',
    2: 'Paper', 
    3: 'Scissors'
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


console.log(playerOne);
