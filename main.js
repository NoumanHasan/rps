let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
let roundResult;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const showPlayerSelection = document.querySelector(".selection-player");
const showComputerSelection = document.querySelector(".selection-computer");
const showPlayerScore = document.querySelector(".player-score");
const showComputerScore = document.querySelector(".computer-score");
const showRoundResult = document.querySelector(".para");

showPlayerScore.textContent = playerScore;
showComputerScore.textContent = computerScore;

rock.addEventListener("click", () => {
  playGame("Rock");
});
paper.addEventListener("click", () => {
  playGame("Paper");
});
scissors.addEventListener("click", () => {
  playGame("Scissors");
});

function playGame(input) {
  const userChoice = input;
  playerSelection = userChoice;
  computerSelection = getComputerChoice();
  showSeletion(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  showResult(playerScore, computerScore, roundResult);
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore === 5) {
      finalResult("You Win!");
    } else {
      finalResult("You Loose!");
    }
  }
}

// function to get computer choice
function getComputerChoice() {
  let computerChoice;
  const rand = Math.floor(Math.random() * 3);
  switch (rand) {
    case 0:
      computerChoice = "Rock";
      break;
    case 1:
      computerChoice = "Paper";
      break;
    case 2:
      computerChoice = "Scissors";
      break;
  }
  return computerChoice;
}
function playRound(x, y) {
  let result;
  // user rock case
  if (x === "Rock" && y === "Rock") {
    result = "Its a tie!";
  } else if (x === "Rock" && y === "Paper") {
    result = "You Loose! Paper beats Rock";
    computerScore++;
  } else if (x === "Rock" && y === "Scissors") {
    result = "You Win! Rock beats Scissors";
    playerScore++;
  }
  // user paper case
  else if (x === "Paper" && y === "Rock") {
    result = "You Win! Paper beats Rock";
    playerScore++;
  } else if (x === "Paper" && y === "Paper") {
    result = "Its a tie!";
  } else if (x === "Paper" && y === "Scissors") {
    result = "You Loose! Scissors beats Paper";
    computerScore++;
  }
  // user scissors case
  else if (x === "Scissors" && y === "Rock") {
    result = "You Loose! Rock beats Scissors";
    computerScore++;
  } else if (x === "Scissors" && y === "Paper") {
    result = "You Win! Scissors beats Paper";
    playerScore++;
  } else if (x === "Scissors" && y === "Scissors") {
    result = "Its a tie!";
  } else {
    // default case
    result = "Choose your weapon";
  }
  roundResult = result;
}
function showSeletion(x, y) {
  switch (x) {
    case "Rock":
      showPlayerSelection.textContent = "✊🏻";
      break;
    case "Paper":
      showPlayerSelection.textContent = "✋🏻";
      break;
    case "Scissors":
      showPlayerSelection.textContent = "✌🏻";
      break;
    default:
      showPlayerSelection.textContent = "";
      break;
  }
  switch (y) {
    case "Rock":
      showComputerSelection.textContent = "✊🏻";
      break;
    case "Paper":
      showComputerSelection.textContent = "✋🏻";
      break;
    case "Scissors":
      showComputerSelection.textContent = "✌🏻";
      break;
    default:
      showComputerSelection.textContent = "";
      break;
  }
}

function showResult(x, y, z) {
  showPlayerScore.textContent = x;
  showComputerScore.textContent = y;
  showRoundResult.textContent = z;
}

function finalResult(result) {
  const modalOverLay = `
      <div class="modal-overlay">
        <div class="modal-window">
          <div class="modal-titlebar">
            <div class="modal-title">Rock Paper Scissors</div>
          </div>
          <div class="modal-content">${result}</div>
          <button onclick="closeModal();gameOver();" class="modal-close">X</button>
        </div>
      </div>`;
  const modal = document.createElement("div");
  // dialogBox.setAttribute('class', 'modal');
  modal.classList.add("modal");
  modal.innerHTML = modalOverLay;
  document.body.appendChild(modal);
}
function closeModal() {
  const modal = document.querySelector(".modal");
  document.body.removeChild(modal);
}
function gameOver() {
  playerScore = 0;
  computerScore = 0;
  playerSelection = "";
  computerSelection = "";
  roundResult = "Choose your weapon";
  showSeletion(playerSelection, computerSelection);
  showResult(playerScore, computerScore, roundResult);
}
