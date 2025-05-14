
// What state do I have?
const deck = []
for(let i = 0; i < 8; i++) {
    deck.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12) // maybe?
}
const playerHand = [4, 5, 7]
const playerPlayed = [4, 4, 4, 8, 8, 8]
const computerHand = [3, 3, 12]
const computerPlayed = [1]
let message = "Welcome to the game!"
let turn = "PLAYER" // or "COMPUTER"

// What areas do I need to render based on that state?

const messageDiv = document.getElementById("message")
const computerHandDiv = document.getElementById("computerHand")
const computerPlayedDiv = document.getElementById("computerPlayed")
const playerHandDiv = document.getElementById("playerHand")
const playerPlayedDiv = document.getElementById("playerPlayed")

function renderFaceDown(cards) {
    let htmlString = ""
    for(const card of cards) {
        htmlString += `
            <div class="p-5 fs-1 bg-primary shadow text-center m-2" style="width: 10rem;">
                ✨
            </div>
        `
    }
    return htmlString
}

function renderFaceUp(cards) {
    let htmlString = ""
    for(const card of cards) {
        htmlString += `
            <div class="p-5 fs-1 bg-light shadow text-center m-2">
                ${card}
            </div>
        `
    }
    return htmlString
}

function renderPlayer() {
    playerHandDiv.innerHTML = renderFaceUp(playerHand)
    playerPlayedDiv.innerHTML = renderFaceUp(playerPlayed)
}

function renderComputer() {
    computerHandDiv.innerHTML = renderFaceDown(computerHand)
    computerPlayedDiv.innerHTML = renderFaceUp(computerPlayed)
}

function renderMessage() {
    messageDiv.textContent = message
}

// load in data when page loads in
renderPlayer()
renderComputer()

// What events do I need to listen to?

function drawFromDeck() {
    // give whoever's turn it is a card from the deck
    const cardFromDeck = deck.pop()
    if(turn === "PLAYER") {
        playerHand.push(cardFromDeck)
        renderPlayer()
    } else {
        computerHand.push(cardFromDeck)
        renderComputer()
    }
    changeTurn()
}

// Helper Listener
function changeTurn() {
    if(turn === "PLAYER") {
        turn = "COMPUTER"
        message = "It's the computer's turn!"
        renderMessage()
    } else {
        turn = "PLAYER"
        message = "It's the player's turn!"
        renderMessage()
    }
}

// 3 options to get something in the page
// 1) createElement, appendChild
// 2) cloneElement, appendChild
// 3) innerHTML