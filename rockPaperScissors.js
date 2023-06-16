
// DATA / STATE

let playerWins = 0
let computerWins = 0
let playerChoice = null
let computerChoice = null
let lastWin = null

const options = ["rock", "paper", "scissors"]

// RENDERING

const messageArea = document.getElementById("message-area")
const buttonArea = document.getElementById("button-area")

renderMessageArea()
renderButtonArea()

function renderMessageArea() {

    messageArea.innerHTML = "Last game: " + lastWin + "<br/>"

    // If the games over
    if(playerWins + computerWins >= 7 && (playerWins > computerWins || computerWins > playerWins)) {
        messageArea.innerHTML += "Game over!<br/>"
        if(playerWins > computerWins) {
            messageArea.innerHTML += " You won!"
        } else {
            messageArea.innerHTML += " You lost!"
        }
        return
    }

    messageArea.innerHTML += "Player wins: " + playerWins + "<br/>Computer wins: " + computerWins + "<br/>"
    messageArea.innerHTML += "Player choice: " + playerChoice + "<br/>Computer choice: " + computerChoice
}

function renderButtonArea() {
    // for(const option of options) {

    // }

    while(buttonArea.hasChildNodes()) {
        buttonArea.removeChild(buttonArea.firstChild)
    }

    // Map each option to how it will be displayed
    const arrayOfButtons = options.map(option => renderButton(option))

    // Put them in the page
    arrayOfButtons.forEach(button => buttonArea.appendChild(button))
}

function renderButton(optionText) {
    const button = document.createElement("button")
    button.textContent = optionText
    button.addEventListener("click", () => playerChose(optionText))
    if(optionText === playerChoice) {
        button.classList.add("btn")
        button.classList.add("btn-danger")
    } else {
        button.classList.add("btn")
        button.classList.add("btn-secondary")
    }
    return button
}

// EVENT LISTENERS

function playerChose(choice) {
    // Get both the choices
    playerChoice = choice
    computerChoice = options[ Math.floor(Math.random() * options.length) ]

    // Check for a win
    if(playerChoice === computerChoice) {
        playerWins++
        computerWins++
        lastWin = "It was a tie!"
    } else if( playerChoice === "rock" && computerChoice === "scissors" 
        || playerChoice === "paper" && computerChoice === "rock" 
        || playerChoice === "scissors" && computerChoice === "paper" 
    ) {
        playerWins++
        lastWin = "You won!"
    } else {
        computerWins++
        lastWin = "Computer won!"
    }

    renderMessageArea()
    renderButtonArea()
}