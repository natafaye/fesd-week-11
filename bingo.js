// STATE (Data)
// 1) List of all the bingo emojis that haven't been picked yet
// 2) Currently picked bingo emoji
// 3) This player's bingo card (list of emojis)
// 4) Track which spots on the bingo card have been crossed out

const emojis = ["😀","🚀","🌈","🔥","🎉","🐶","🍕","🌍",
    "⚡","🎸","📚","🧠","🏀","🍩","🌟","🎧","🦄","🍔","🏝️","🚗"]
let currentEmoji = getRandomEmoji()
let playerCard = generateRandomBingoCard(3, 3)
let computerCard = generateRandomBingoCard(3, 3)
/*
bingoCard = [
  {
    emoji: "🐸",
    filled: false
  },
  {
    emoji: "🐷",
    filled: false
  },
]
*/


// RENDERING
// Think about what parts of the page will change based on the data
// 1) Next Bingo Thing
// 2) My Card

// Find: querySelector() or getElementById()
const playerCardContainer = document.getElementById("player-card")
const computerCardContainer = document.getElementById("computer-card")

function renderBingoCard(card, container) {
    // Clear out anything from a previous render
    container.innerHTML = ""

    for(let i = 0; i < card.length; i++) {
        // Create the new element (soul)
        const newSquareDiv = document.createElement("div")
        newSquareDiv.className = "border"
        newSquareDiv.textContent = card[i].emoji
        if(card[i].filled) {
            newSquareDiv.style.backgroundColor = "rgb(19, 34, 70)"
        }
        // <div class="bg-white border">🐄</div>

        // LISTENING
        newSquareDiv.addEventListener("click", () => {
            // Updating the state (data)
            card[i].filled = true
            // Re-rendering based on that state update
            newSquareDiv.style.backgroundColor = "rgb(19, 34, 70)"
        })

        // Move it into the page (earth)
        container.appendChild(newSquareDiv)
    }
}
renderBingoCard(playerCard, playerCardContainer)
renderBingoCard(computerCard, computerCardContainer)

const nextContainer = document.querySelector("#next-container")
function renderNextBingoThing() {
    nextContainer.textContent = currentEmoji
}
renderNextBingoThing()

// LISTENING
// 1) Clicking on a square on the card
// 2) Clicking the Next button

// LISTENING
function getNextEmoji() {
    // Update the state (data)
    currentEmoji = getRandomEmoji()
    // Automatically mark the AI card spots as filled
    for(let i = 0; i < computerCard.length; i++) {
        if(computerCard[i].emoji === currentEmoji) {
            computerCard[i].filled = true
        }
    }

    // Re-render based on that state
    renderNextBingoThing()
    renderBingoCard(computerCard, computerCardContainer);
}


/***** Helpers *****/

function getRandomEmoji() {
    return emojis[Math.floor(Math.random()*emojis.length)]
}

function generateRandomBingoCard(width, height) {
    const newCard = []
    // TODO: Don't allow duplicates
    for(let i = 0; i < width * height; i++) {
        const newSquare = {
            emoji: getRandomEmoji(),
            filled: false
        }
        newCard.push(newSquare)
    }
    return newCard
}