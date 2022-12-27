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