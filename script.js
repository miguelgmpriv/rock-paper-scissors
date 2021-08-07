function computerPlay(){
    let computerOptions = ['ROCK','PAPER','SCISSORS'];
    let computerPick = Math.floor(Math.random() * 3);
    return computerOptions[computerPick];
}

function playerPlay(){
    while(true){
    let playerPick = prompt('Enter your choice(Rock, Paper or Scissors)', '');
    if (playerPick === null) {return null};
    playerPick = playerPick.toUpperCase();
    if (playerPick === 'ROCK' || playerPick === 'PAPER' || playerPick === 'SCISSORS'){
    return playerPick;
    } else {
        alert('That\'s not a valid response! Try again');
    }
    }
}



function playRound(playerSelection = playerPlay(), computerSelection = computerPlay()){
    if (playerSelection === null){return null};
    if (playerSelection === computerSelection){
        console.log('It\'s a draw! Both players picked ' + playerSelection + '!')
        return 0;
    }
    if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS'){
        console.log('You win! ' + playerSelection + ' beats  '+computerSelection+'!');
        return true;
    } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK'){
        console.log('You win! ' + playerSelection + ' beats  '+computerSelection+'!');
        return true;
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK'){
        console.log('You win! ' + playerSelection + ' beats  '+computerSelection+'!');
        return true;
    } else {
        console.log('You lose! '+computerSelection+' beats '+playerSelection+'!');
        return false;
    }

}
function playGame(){
    let playerScore = 0;
    let computerScore = 0;
    for (let counter = 0; counter < 5; counter++){
        let roundWinner = playRound();
        if (roundWinner === null){
            return console.log('Game over!');
        }
        if(roundWinner === 0){
            continue;
        } else if (roundWinner === true){
            playerScore = playerScore + 1;
        } else {
            computerScore = computerScore + 1;
        }
    }
    if (playerScore === computerScore){
        console.log('No winner\'s here! Play again?');
    } else if(playerScore > computerScore){
        console.log('You are the winner of this game with a score of '+playerScore+'! Play again?');
    } else {
        console.log('You lost this game :(. Your score is '+playerScore+'. Play again?');
    }
}

playGame();