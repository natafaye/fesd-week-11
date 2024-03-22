
/***** STATE *****/
const playerHand = []
const dealerHand = []

let isGameOver = false

// make the deck
const spades = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 11];
const clubs = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 11];
const hearts = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 11];
const diamonds = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 11];
let deck = spades.concat(clubs).concat(hearts).concat(diamonds);

// NEW: added real quick after class, shuffle the deck
for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
}


/**** RENDERING ****/

function renderUserMessage() {
    console.log("rendering!")
    // Conditional Rendering
    if (!isGameOver) {
        document.getElementById("user-message").innerHTML = `
            Here's your hand value: ${getHandValue(playerHand)}
            Do you want another card?
        `
    } else {
        document.getElementById("user-message").innerHTML = `
            This person won
        `
    }
}

// render when the page loads in
renderUserMessage()

/**** LISTENING ****/

function onHitClick() {
    console.log("hit was clicked!")
    // 1) update the state
    playerHand.push(deck.pop())
    dealerHand.push(deck.pop())

    // NEW: Added real quick after class
    if(isGameOver()) {
        isGameOver = true
    }

    // 2) re-render based on the state
    renderUserMessage()
}

function onCallClick() {
    // 1) update the state
    isGameOver = true

    // 2) re-render based on the state
    renderUserMessage()
}


/**** UTILITIES ****/

function getHandValue(hand) {
    let total = 0;
    for (let i = 0; i < hand.length; i++) {
        total += hand[i]
    }
    return total
}

// NEW: Added real quick after class
function isGameOver() {
    // check if either player over 21
    return getHandValue(playerHand) >= 21
        || getHandValue(dealerHand) >= 21
}