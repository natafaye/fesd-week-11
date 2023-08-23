
/*** STATE (DATA) ***/

let targetWord = "UNLESS"
let scrambledTarget = "LUESSN"
let currentGuess = ""
let gameStatus = "guessing" // "guessing" or "lost" or "won"


/*** RENDERING FUNCTIONS ***/

const $boardContainer = $("#board-container")
const $guessContainer = $("#guess-container")
const $messageContainer = $("#message-container")

function renderApp() {
    renderBoard()
    renderGuess()
    renderMessage()
}

// render on first load
renderApp()

function renderBoard() {
    $boardContainer.empty()
    for(let i = 0; i < scrambledTarget.length; i++) {
        const letter = scrambledTarget[i]

        // Conditional rendering
        let buttonClass = "success"
        let disabled = ""
        if(currentGuess.includes(letter)) {
            buttonClass = "light"
            disabled = "disabled"
        }
    
        const $button = $(`<button class="btn btn-${buttonClass} fs-1 me-2" ${disabled}>${letter}</button>`)
        $button.on("click", () => onAddLetter(letter))
        $boardContainer.append($button)
    }
}

function renderGuess() {
    $guessContainer.text(currentGuess)
}

function renderMessage() {
    if(gameStatus === "won") {
        $messageContainer.text("You won!")
    } else if(gameStatus === "lost") {
        $messageContainer.text("You lost!")
    } else {
        $messageContainer.text("")
    }
}

/*** EVENT LISTENERS ***/

function onAddLetter(letter) {
    currentGuess += letter

    renderApp()
}

function onRemoveLetter(letter) {
    currentGuess.replace(letter, "")
    // TODO: fix double letter issue

    renderApp()
}

function onGuess() {
    if(currentGuess === targetWord) {
        gameStatus = "won"
    } else {
        gameStatus = "lost"
    }

    renderApp()
}