/*-------------------------------- Constants --------------------------------*/

const choices = ["lapis", "papyrus", "scalpellus"]



/*-------------------------------- Variables --------------------------------*/
let playerChoice, compChoice, msg


/*------------------------ Cached Element References ------------------------*/
const result = document.getElementById("result-display")


/*----------------------------- Event Listeners -----------------------------*/

document.getElementById("lapis").addEventListener("click", play)
document.getElementById("papyrus").addEventListener("click", play)
document.getElementById("scalpellus").addEventListener("click", play)



/*-------------------------------- Functions --------------------------------*/