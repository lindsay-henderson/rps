/*-------------------------------- Constants --------------------------------*/

const choices = ["lapis", "papyrus", "scalpellus"]



/*-------------------------------- Variables --------------------------------*/
let playerChoice, compChoice, msg


/*------------------------ Cached Element References ------------------------*/
const result = document.getElementById("result-display")


/*----------------------------- Event Listeners -----------------------------*/

document.querySelectorAll("button").forEach(function(button) {
  button.addEventListener("click", play)
})
/*-------------------------------- Functions --------------------------------*/

function play(event) {
  console.log(event.target)
}

function getPlayerChoice(event) {
  playerChoice = event.target.id
}

function play(event) {
  getPlayerChoice(event)
  console.log(playerChoice)
}

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * (choices.length - 1))
  compChoice = choices[randomIndex]
}

function compare() {
  if (playerChoice === compChoice) {
    msg = 'You tied!'
  } else if (playerChoice === choices[0] && compChoice === choices[2]) {
    msg = "Congrats! You win!"
  } else if (playerChoice === choices[1] && compChoice === choices[0]) {
    msg = "Congrats! You win!"
  } else if (playerChoice === choices[2] && compChoice === choices[1]) {
    msg = "Congrats! You win!"
  } else {
    msg = "You lose! Try again?"
  }
}

