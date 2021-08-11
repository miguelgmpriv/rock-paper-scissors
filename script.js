window.addEventListener('click',function(e){
    const playerChoice = e.target.id;
    if (playerChoice === 'rock' || playerChoice === 'scissors' || playerChoice === 'paper'){
        return playRound(playerChoice);
    } else {
        return;
    }
})


function computerPlay(){
    let computerOptions = ['rock','paper','scissors'];
    let computerPick = Math.floor(Math.random() * 3);
    return computerOptions[computerPick];
}



function playRound(playerSelection, computerSelection = computerPlay()){
    if (playerSelection === computerSelection){
        console.log('It\'s a draw! Both players picked ' + playerSelection + '!')
        return 0;
    }
    if (playerSelection === 'rock' && computerSelection === 'scissors'){
        console.log('You win! ' + playerSelection + ' beats  '+computerSelection+'!');
        return keepScore(true);
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        console.log('You win! ' + playerSelection + ' beats  '+computerSelection+'!');
        return keepScore(true);
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        console.log('You win! ' + playerSelection + ' beats  '+computerSelection+'!');
        return keepScore(true);
    } else {
        console.log('You lose! '+computerSelection+' beats '+playerSelection+'!');
        return keepScore(false);
    }

}
function keepScore(winner){
    let playerScore = Number(document.querySelector('#playerScore').textContent);
    let computerScore = Number(document.querySelector('#computerScore').textContent);
    if(winner){
        playerScore += 1;
    } else {
        computerScore += 1;
    }
    document.querySelector('#playerScore').textContent = playerScore;
    document.querySelector('#computerScore').textContent = computerScore;
    if (playerScore === 3){
        return console.log('You won!');
    } else if (computerScore === 3){
        return console.log('Your opponent won!');
    }
}

