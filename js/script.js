function computerPlay(){
    const choice = ["Rock","Paper","Scissor"];
    let randomPick = Math.floor(Math.random() * 3);
    return choice[randomPick];
}

function playRound(playerSelection,computerSelection){
    let message;
    let winner;
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection === "rock" && computerSelection === "scissor"){
        message = "You Win! Rock beats Scissor";
        winner = 1;
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){
        message = "You Win! Paper beats Rock";
        winner = 1;
    }
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        message = "You Win! Scissor beats Paper";
        winner = 1;
    }
    else if(playerSelection === computerSelection){
        message = `It's a Tie! ${computerSelection.replace(
                            computerSelection.charAt(0),
                            computerSelection.charAt(0).toUpperCase())}
                            loves ${playerSelection.replace(playerSelection.charAt(0),
                            playerSelection.charAt(0).toUpperCase())}`;
    }
    else {
        message = `You Lose! ${computerSelection.replace(
                            computerSelection.charAt(0),
                            computerSelection.charAt(0).toUpperCase())}
                            beats ${playerSelection.replace(playerSelection.charAt(0),
                            playerSelection.charAt(0).toUpperCase())}`;
        winner = 2;
    }
    console.log(message);
    return winner;
}

function game(playerSelection){
    let playerScore = 0;
    let computerScore = 0;
    let tieScore = 0;
    for(let i = 0,winner;i<5;i++){
        // const playerSelection = "rock";
        const computerSelection = computerPlay();
        winner = playRound(playerSelection,
                                          computerSelection,
                                          playerScore,
                                          computerScore);
        (winner === 1) ? playerScore++ : 
        (winner === 2) ? computerScore++ : tieScore++;
    }
    console.log(playerScore);    
    console.log(computerScore);
    console.log(tieScore);
    if(playerScore > computerScore){
        console.log("Player Wins!");
    }
    else if(playerScore < computerScore){
        console.log("Computer Wins!");
    }
    else{
        console.log("It' a tie! Good Job Both of you");
    }
}
const playerSelection = prompt("Choose Rock, Paper or Scissor");
game(playerSelection);

