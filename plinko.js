const players = [
    {
        name: "Bobby",
        lowScore: 3,
        score: 0
    },
    {
        name: "Sheila",
        lowScore: 2,
        score: 0
    }
]
let currentPlayer = undefined
const numberOfSlots = 4

const textbox = document.getElementById("name-input")

// Listening function that listens to them pushing the start button
function start() {

    // Setting the currentPlayer piece of state (data)
    const name = textbox.value

    currentPlayer = players.find(playerToCheck => playerToCheck.name === name)

    if (currentPlayer === undefined) {
        currentPlayer = { name: name, lowScore: 1000, score: 0 }
        players.push(currentPlayer)
    }

    // Rendering based on that state
    renderMessage("Welcome " + currentPlayer.name + " Your lowest score so far is " + currentPlayer.lowScore)
    renderBoard(numberOfSlots)
}

// Listener
function dropTheBall(slot) {
    // setting some state
    currentPlayer.score++

    // drop the ball and figure out if they won
    // TODO: make this actually work
    const won = true
    // switch(slot) {
    //     case 1: 
    //     case 2:
    //     case 3:
    // }


    // rendering based on that state
    if (won) {
        renderMessage(`
            <p>You won ${currentPlayer.name}!</p>
            <h4>Low Scores</h4>
            <table>
                ${players.map(player => `<tr><td>${player.name}</td><td>${player.lowScore}</td></tr>`).join("")}
            </table>
        `)
        renderBoard(0)
    } else {

    }
    // do you want to play again?
    // listen for their response and call start() if they say yes
}


const messageDiv = document.querySelector("#message")

function renderMessage(message) {
    // Fizzle into existence
    // Try to fade this out
    messageDiv.innerHTML = message
}


const boardDiv = document.getElementById("board")
const ballDiv = document.getElementById("ball")

function renderBoard(numberOfSlots) {
    boardDiv.innerHTML = `
        <div class="peg"></div>
        <button class="drop-button flex-grow-1 border-0" data-slot="1"></button>
        <div class="peg"></div>
        <button class="drop-button flex-grow-1 border-0" data-slot="2"></button>
        <div class="peg"></div>
        <button class="drop-button flex-grow-1 border-0" data-slot="3"></button>
        <div class="peg"></div>
        <button class="drop-button flex-grow-1 border-0" data-slot="4"></button>
        <div class="peg"></div>
    `
    // grab all the drop buttons and attach an event listener
    const handleDropHover = (event) => {
        // take the ball and move it inside of the button that is being hovered
        // How do I know which button is being hovered?
        // How do I get the node that's being hovered
        const buttonThatsHovered = event.target
        buttonThatsHovered.appendChild(ballDiv)
    }
    const handleDropEndHover = () => {
        ballDiv.remove()
    }
    document.querySelectorAll(".drop-button").forEach(
        button => {
            button.addEventListener("mouseenter", handleDropHover)
            button.addEventListener("mouseleave", handleDropEndHover)
            button.addEventListener("click", () => dropTheBall(button.dataset.slot))
        }
    )
}