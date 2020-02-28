let playerScore = 0;
let computerScore = 0;
let round = 0;
let playerChosen = "";
let computerChosen = "";
let gameFinished = 0;

const buttons = document.querySelectorAll("button");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const scoreboardWrapper = document.querySelector(".scoreboard-wrapper");
const playerScoreDiv = document.querySelector(".player-score");
const playerChoiceDiv = document.querySelector(".player-choice");
const messages = document.querySelector(".messages");
const computerChoiceDiv = document.querySelector(".computer-choice");
const computerScoreDiv = document.querySelector(".computer-score");

buttons.forEach(function(btn) {
  btn.addEventListener("click", function(e) {
    if (gameFinished !== 0) {
      playerScore = 0;
      computerScore = 0;
      replaceContent("");
    }
    playerChosen = e.target.id;
    shake();
  });
});

function shake() {
  let imgPlayer = playerChoiceDiv.firstElementChild;
  let imgComputer = computerChoiceDiv.firstElementChild;
  imgPlayer.src = "images/rock.png";
  imgComputer.src = "images/rock.png"
  playerChoiceDiv.classList.add("shaking-left");
  computerChoiceDiv.classList.add("shaking-right");
  messages.innerHTML = "";
}

playerChoiceDiv.addEventListener("animationend", afterShake);

function afterShake() {
  let imgPlayer = playerChoiceDiv.firstElementChild;
  let imgPlayer2 = document.createElement("img");
  imgPlayer2.src = "images/"+playerChosen+".png";
  imgPlayer.replaceWith(imgPlayer2);
  computerChosen = askComputer();
  let imgComputer = computerChoiceDiv.firstElementChild;
  let imgComputer2 = document.createElement("img");
  imgComputer2.src = "images/"+computerChosen.toLowerCase()+".png";
  imgComputer.replaceWith(imgComputer2);
  playerChoiceDiv.classList.remove("shaking-left");
  computerChoiceDiv.classList.remove("shaking-right");
  playRound(playerChosen, computerChosen);
};

function replaceContent(content) {
  messages.innerHTML = content;
  playerScoreDiv.innerHTML = playerScore;
  computerScoreDiv.innerHTML = computerScore;
};

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection.toLowerCase()) {
    console.log("Computer chose " + computerSelection);
    console.log("It's a Draw! Try again");
    console.log("Player: " + playerScore + " - Computer: " + computerScore);
    replaceContent("It's a Draw!")
    checkScore();
  }
  else if (playerSelection === "rock") {
    if (computerSelection === "Paper") {
      computerScore++;
      console.log("Computer chose " + computerSelection);
      console.log("You Lose! Paper beats Rock");
      console.log("Player: " + playerScore + " - Computer: " + computerScore);
      replaceContent("You Lose! Paper beats Rock")
      checkScore();
    }
    else {
      playerScore++;
      console.log("Computer chose " + computerSelection);
      console.log("You Win! Rock beats Scissors");
      console.log("Player: " + playerScore + " - Computer: " + computerScore);
      replaceContent("You Win! Rock beats Scissors")
      checkScore();
    }
  }
  else if (playerSelection === "paper") {
    if (computerSelection === "Rock") {
      playerScore++;
      console.log("Computer chose " + computerSelection);
      console.log("You Win! Paper beats Rock");
      console.log("Player: " + playerScore + " - Computer: " + computerScore);
      replaceContent("You Win! Paper beats Rock")
      checkScore();
    }
    else {
      computerScore++;
      console.log("Computer chose " + computerSelection);
      console.log("You Lose! Scissors beats Paper");
      console.log("Player: " + playerScore + " - Computer: " + computerScore);
      replaceContent("You Lose! Scissors beats Paper")
      checkScore();
    }
  }
  else if (playerSelection === "scissors") {
    if (computerSelection === "Rock") {
      computerScore++;
      console.log("Computer chose " + computerSelection);
      console.log("You Lose! Rock beats Scissors");
      console.log("Player: " + playerScore + " - Computer: " + computerScore);
      replaceContent("You Lose! Rock beats Scissors")
      checkScore();
    }
    else {
      playerScore++;
      console.log("Computer chose " + computerSelection);
      console.log("You Win! Scissors beats Paper");
      console.log("Player: " + playerScore + " - Computer: " + computerScore);
      replaceContent("You Win! Scissors beats Paper")
      checkScore();
    }
  }
}

function checkScore() {
  if (playerScore === 5) {
    messages.innerHTML = "You Win the game!";
    gameFinished++;
  }
  else if (computerScore === 5) {
    messages.innerHTML = "You Lose the game!";
    gameFinished++;
  }
  else {
    gameFinished = 0;
  }
}

function askComputer() {
  let options = ["Rock", "Paper", "Scissors"];   
  computerChoice = options[Math.floor(Math.random()*options.length)];
  return computerChoice;
}

