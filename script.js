function computerPlay(){
    let computerOptions = ['ROCK','PAPER','SCISSORS'];
    let computerPick = Math.floor(Math.random() * 3);
    return computerOptions[computerPick];
}

function playerPlay(){
    while(true){
    let playerPick = prompt('Enter your choice(Rock, Paper or Scissors)', '');
    playerPick = playerPick.toUpperCase();
    if (playerPick === 'ROCK' || playerPick === 'PAPER' || playerPick === 'SCISSORS'){
    return playerPick;
    } else {
        alert('That\'s not a valid response! Try again');
    }
    }
}

let playerChoice = playerPlay();
let computerChoice = computerPlay();

console.log(computerChoice);
console.log(playerChoice);
function playRound(playerSelection, computerSelection){
  
    if (playerSelection === computerSelection){
        alert('It\'s a draw! Both players picked ' + playerSelection + '!')
        return;
    }

    if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS'){
        alert('You win! ' + playerSelection + ' beats  '+computerSelection+'!');
        return;
    } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK'){
        alert('You win! ' + playerSelection + ' beats  '+computerSelection+'!');
        return;
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK'){
        alert('You win! ' + playerSelection + ' beats  '+computerSelection+'!');
        return;
    } else {
        alert('You lose! '+computerSelection+' beats '+playerSelection+'!');
        return;
    }


}

playRound(playerChoice,computerChoice);