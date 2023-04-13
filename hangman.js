/**** Containers ****/

const wordArea = document.getElementById("word-area")
const guessesArea = document.getElementById("guesses-area")
const messageArea = document.getElementById("message-area")
const guessTextbox = document.getElementById("guess-textbox")

/**** Data ****/

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

let word = "APPLE"
let guesses = []

/**** RENDER ****/

function renderWordArea() {
    while(wordArea.hasChildNodes()) {
        wordArea.removeChild(wordArea.lastChild)
    }

    for(let i = 0; i < word.length; i++) {
        const div = document.createElement("div")
        div.classList.add("mx-2")
        if(guesses.includes(word[i])) {
            div.textContent = word[i]
        }
        else {
            div.textContent = "__"
        }
        wordArea.appendChild(div)
    }
}

function renderGuessesArea() {
    while(guessesArea.hasChildNodes()) {
        guessesArea.removeChild(guessesArea.lastChild)
    }

    for(let i = 0; i < ALPHABET.length; i++) {
        const div = document.createElement("div")
        div.textContent = ALPHABET[i]
        if(guesses.includes(ALPHABET[i]) && !word.includes(ALPHABET[i])) {
            div.classList.add("text-danger")
        }
        else if(guesses.includes(ALPHABET[i]) && word.includes(ALPHABET[i])) {
            div.classList.add("text-success")
        }
        else {
            div.addEventListener("click", () => onGuess(ALPHABET[i]))
        }
        guessesArea.appendChild(div)
    }
}

// function renderGuessesArea() {
//     const wrongGuesses = guesses.filter(guess => !word.includes(guess))
//     let guessesMessage = "WRONG GUESSES: "
//     for(const letter of wrongGuesses) {
//         guessesMessage += letter + " "
//     }
//     guessesArea.textContent = guessesMessage
// }

function renderMessageArea() {
    let won = true
    for(let i = 0; i < word.length; i++) {
        if(!guesses.includes(word[i])) {
            won = false
        }
    }

    if(won) {
        messageArea.textContent = "You won!"
    }
    else if(guesses.length === 0) {
        messageArea.textContent = "Make a guess!"
    }
    else {
        messageArea.textContent = "You guessed " + guesses[guesses.length - 1]
    }
}

/**** EVENT LISTENERS ****/

window.addEventListener("load", () => {
    renderWordArea()
    renderGuessesArea()
    renderMessageArea()
})

function onGuess(newGuess) {
    // const newGuess = guessTextbox.value
    // guessTextbox.value = ""

    // change the data
    guesses.push(newGuess)

    // rerender based on the data
    renderWordArea()
    renderGuessesArea()
    renderMessageArea()
}

function reset() {
    word = "APPLE"
    guesses = []

    // rerender based on the data
    renderWordArea()
    renderGuessesArea()
    renderMessageArea()
}