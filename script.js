window.addEventListener('click',function(e){
    const playerScore = Number(document.querySelector('#playerScore').textContent);
    const computerScore = Number(document.querySelector('#computerScore').textContent);
    const playerChoice = e.target.id;
    if (playerChoice === 'start') {
        cleanUp();
        return;
    } else if (playerScore === 5 || computerScore === 5){
        return;
    } else if (playerChoice === 'rock' || playerChoice === 'scissors' || playerChoice === 'paper'){
        document.getElementById('playerPick').src = `${playerChoice}.png`;
        return playRound(playerChoice);
    } else {
        return;
    }
})


function computerPlay(){
    removeClass();
    let computerOptions = ['rock','paper','scissors'];
    let computerPick = Math.floor(Math.random() * 3);
    let pcPick = document.getElementById(`pc${computerOptions[computerPick]}`)
    pcPick.classList.add("pcPick");
    document.getElementById('computerPick').src = `${computerOptions[computerPick]}.png`;
    return computerOptions[computerPick];
}

function removeClass(){
    let pcPick = document.getElementsByClassName("pcPick");
    while (pcPick.length)
        pcPick[0].classList.remove("pcPick");
}

function cleanUp() {
    const start = document.querySelector('#start');
    removeClass();
    document.querySelector('#playerScore').textContent = 0;
    document.querySelector('#computerScore').textContent = 0;
    document.querySelector('#output').textContent = '';
    start.style.display = 'none';
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
        output.textContent = `You win! ${playerSelect[0].toUpperCase() + playerSelect.substring(1)} beats ${cpuSelect}!`;
    } else if (victory === false) {
        output.textContent = `You lose! ${cpuSelect[0].toUpperCase() + cpuSelect.substring(1)} beats ${playerSelect}!`;
    } 
}

function keepScore(winner){
    let playerScore = Number(document.querySelector('#playerScore').textContent);
    let computerScore = Number(document.querySelector('#computerScore').textContent);
    const output = document.querySelector('#output');
    const start = document.querySelector('#start');
    if(winner){
        playerScore += 1;
    } else {
        computerScore += 1;
    }
    document.querySelector('#playerScore').textContent = playerScore;
    document.querySelector('#computerScore').textContent = computerScore;
    if (playerScore === 5){
        output.append(' That\'s five wins so you have won this match. Click below to play again.');
        start.style.display = 'flex';
    } else if (computerScore === 5){
        output.append(' That\'s five losses so you have lost this match. Click below to play again.');
        start.style.display = 'flex';
    }
}

