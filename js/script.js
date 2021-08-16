// Empujar cambios rama principal
//  git push ó git push origin main
// Empujar cambios a otra rama
// git push origin #nombre rama => git push origin rps-ui
const countPlayer = document.querySelector(".c-player");
const countComputer = document.querySelector(".c-computer");
const imgParentPlayer = document.querySelector(".content");
const imgParentComputer = document.querySelector(".content.inverted");
const buttons = document.querySelectorAll(".button");
const userName = document.querySelector("#username");

let computerScore = 0;
let playerScore = 0;
let user;
let endGame = false;
// user = prompt("Ingrese su nombre","");

if (!user) user = "Patrick";
userName.textContent = user;

function computerPlay() {
  const choice = ["rock", "paper", "scissor"];
  let randomPick = Math.floor(Math.random() * 3);
  return choice[randomPick];
}

function playRound(playerSelection, computerSelection) {
  let message;
  let winner;
  if (playerSelection === "rock" && computerSelection === "scissor") {
    message = "You Win! Rock beats Scissor";
    winner = 0;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    message = "You Win! Paper beats Rock";
    winner = 0;
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    message = "You Win! Scissor beats Paper";
    winner = 0;
  } else if (playerSelection === computerSelection) {
    message = `It's a Tie! ${computerSelection.replace(
      computerSelection.charAt(0),
      computerSelection.charAt(0).toUpperCase()
    )} loves ${playerSelection.replace(
      playerSelection.charAt(0),
      playerSelection.charAt(0).toUpperCase()
    )}`;
  } else {
    message = `You Lose! ${computerSelection.replace(
      computerSelection.charAt(0),
      computerSelection.charAt(0).toUpperCase()
    )} beats ${playerSelection.replace(
      playerSelection.charAt(0),
      playerSelection.charAt(0).toUpperCase()
    )}`;
    winner = 1;
  }
  return [message, winner];
}

function checkEndGame(playerScore, computerScore) {
  if (playerScore === 5) return 0;
  else if (computerScore === 5) return 1;
  return;
}

function showWinnerMessage(indexWinner) {
  const winnerMessage = document.getElementById("winner-message");
  if (indexWinner === 0) {
    winnerMessage.textContent = `${user} Wins!`;
  } else {
    winnerMessage.textContent = `Watson Wins!`;
  }
  message.textContent = "GAME END!!!";
}

function updateScore(indexWinner) {
  if (indexWinner === 0) playerScore++;
  else if (indexWinner === 1) computerScore++;
  countPlayer.textContent = playerScore;
  countComputer.textContent = computerScore;
}

function setImages(playerSelection, computerSelection) {
  const imgPlayer = document.createElement("img");
  const imgComputer = document.createElement("img");
//   !Remoto
  imgPlayer.src = `https://patrickjohangh.github.io/Rock-Paper-Scissors-Game/images/${playerSelection}-copia.jpg`;
  imgComputer.src = `https://patrickjohangh.github.io/Rock-Paper-Scissors-Game/images/${computerSelection}-copia.jpg`;
//   !Local
//  ! imgPlayer.src = `/images/${playerSelection}-copia.jpg`;
//  ! imgComputer.src = `/images/${computerSelection}-copia.jpg`;
  imgParentPlayer.appendChild(imgPlayer);
  imgParentComputer.appendChild(imgComputer);
}

function removeImages() {
  const childPlayer = imgParentPlayer.firstChild;
  const childComputer = imgParentComputer.firstChild;
  imgParentPlayer.removeChild(childPlayer);
  imgParentComputer.removeChild(childComputer);
}

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (!endGame) {
      removeImages();
      let playerSelection = this.getAttribute("id");
      let computerSelection = computerPlay();
      const [messageRound, winnerRound] = playRound(
        playerSelection,
        computerSelection
      );
      message.textContent = messageRound;
      updateScore(winnerRound);
      const indexWinner = checkEndGame(playerScore, computerScore);
      if (typeof indexWinner === "number") {
        showWinnerMessage(indexWinner);
        endGame = true;
      }
      setImages(playerSelection, computerSelection);
    }
  });
});
