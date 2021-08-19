window.addEventListener('click',function(e){
    const playerChoice = e.target.id;
    if (playerChoice === 'rock' || playerChoice === 'scissors' || playerChoice === 'paper'){
        document.getElementById('playerPick').src = `${playerChoice}.png`;
        return playRound(playerChoice);
    } else {
        return;
    }
})


function computerPlay(){
    let computerOptions = ['rock','paper','scissors'];
    let computerPick = Math.floor(Math.random() * 3);
    document.getElementById('computerPick').src = `${computerOptions[computerPick]}.png`;
    return computerOptions[computerPick];
}



function playRound(playerSelect, cpuSelect = computerPlay()){
    if (playerSelect === cpuSelect){
        displayText(playerSelect,cpuSelect,0);
       return 0;
    }
    if (playerSelect === 'rock' && cpuSelect === 'scissors'){
        displayText(playerSelect,cpuSelect,true);
        return keepScore(true);
    } else if (playerSelect === 'paper' && cpuSelect === 'rock'){
        displayText(playerSelect,cpuSelect,true);
        return keepScore(true);
    } else if (playerSelect === 'scissors' && cpuSelect === 'rock'){
        displayText(playerSelect,cpuSelect,true);
        return keepScore(true);
    } else {
        displayText(playerSelect,cpuSelect,false);
        return keepScore(false);
    }

}

function displayText(playerSelect,cpuSelect,victory){
    const output = document.querySelector('#output');

    if (victory === 0) {    
        output.textContent = `It\'s a draw! Both players picked ${playerSelect} !`;
    } else if (victory === true) {
        output.textContent = `You win! ${playerSelect} beats ${cpuSelect}!`;
    } else if (victory === false) {
        output.textContent = `You lose! ${cpuSelect} beats ${playerSelect}!`;
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
    if (playerScore === 5){
        return console.log('You won!');
    } else if (computerScore === 3){
        return console.log('Your opponent won!');
    }
}

