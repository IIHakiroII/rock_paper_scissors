const variables = ["Rock", "Paper", "Scissors"];

function getComputerChoice(variables){
  const randomChoice = variables[Math.floor(Math.random() * variables.length)];

  console.log(randomChoice);
}

getComputerChoice(variables);

function playRound(playerSelection, computerSelection){
  if(computerSelection == "Paper" && playerSelection == "Rock"){
    return "You Lose! Paper beats Rock";

  } else if(computerSelection == "Paper" && playerSelection == "Paper"){
    return "You tied! You chose Paper";

  } else if(computerSelection == "Paper" && playerSelection == "Scissors"){
    return "You win! Scissors beats Rock"

  } else if(computerSelection == "Paper" && playerSelection == "Rock"){
    return "You Lose! Paper beats Rock";

  } else if(computerSelection == "Paper" && playerSelection == "Paper"){
    return "You tied! You chose Paper";
    
  } else if(computerSelection == "Paper" && playerSelection == "Scissors"){
    return "You win! Scissors beats Rock"
  } else if 
}