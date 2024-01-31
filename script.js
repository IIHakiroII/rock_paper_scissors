const variables = ["Rock", "Paper", "Scissors"];

function getComputerChoice(variables){
  const randomChoice = variables[Math.floor(Math.random() * variables.length)];

  console.log(randomChoice);
}

getComputerChoice(variables);

function gameChoice(playerSelection, computerSelection) {
  if(computerSelection == playerSelection){
    console.log("Tie");
  } else if(playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Paper" && computerSelection == "Rock" || playerSelection == "Scissors" && computerSelection == "Paper"){
    console.log("Player Win");
  } else {
    console.log("Computer Win");
  }
}

function playRound(playerSelection, computerSelection) {
  const resultRound = gameChoice(playerSelection, computerSelection);

  if(resultRound == "Tie"){
    console.log("It's a tie! :O");
  } else if(resultRound == "Player Win"){
    console.log("You win! :)");
  } else {
    console.log("You lose.. :(");
  }
}