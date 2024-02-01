const variables = ["rock", "paper", "scissors"];

function getComputerChoice(variables){
  let randomChoice = variables[Math.floor(Math.random() * variables.length)];

  return randomChoice;
}

getComputerChoice(variables);

function gameChoice(playerSelection, computerSelection){
  if(computerSelection == playerSelection){
    return "tie";
  } else if(playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper"){
    return "player win";
  } else {
    return "computer win";
  }
}

function playRound(playerSelection, computerSelection){
  const result = gameChoice(playerSelection, computerSelection);

  if(result == "tie"){
    return `It's a tie, ${playerSelection} is equal to ${computerSelection}`;
  } else if(result == "player win"){
    return `You win, ${playerSelection} beats ${computerSelection}`;
  } else if(result == "computer win"){
    return `You lose, ${computerSelection} beats ${playerSelection}`;
  }
}

const playerSelection = prompt("Rock, paper or scissors");

const computerSelection = getComputerChoice(variables);
console.log(playRound(playerSelection.toLowerCase(), computerSelection));

function playGame(){
  playRound(playerSelection, computerSelection);
}