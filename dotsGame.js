const boardContainer = document.getElementById("board")
const messageContainer = document.getElementById("message")

// DATA
const lines = [0, 0, 0, 0, 0, 0]
let message = "Welcome to the game! Click a spot!"
let turn = 1
let gameOver = false

/* RENDER FUNTIONS */

window.addEventListener("load", () => {
    // Run when the app first loads in
    renderBoard()
    renderMessage()
})

function renderBoard() {
    emptyElement(boardContainer)
    for(let i = 0; i < lines.length; i++) {
        const div = document.createElement("div")
        div.classList.add("line-div")

        // Only add the event listeners if the game isn't over
        if(!gameOver) {
            div.addEventListener("click", () => onSquareClick(i))
        }


        if(lines[i] === 1) {
            div.style.borderLeft = "2px solid black"
        }

        // If we wanted to show an image instead of adding a border
        // if(lines[i] === 1) {
        //     // Option 1
        //     //div.style.background = 'url("images/chair.jpg")'

        //     // Option 2
        //     const img = document.createElement("img")
        //     img.src = "images/chair.jpg"
        //     img.style.width = "50px"
        //     div.append(img)
        // }
        // else if(lines[i] === 0) {
        //     // Option 1
        //     //div.style.background = 'url("images/thewinston.jpg")'

        //     // Option 2
        //     const img = document.createElement("img")
        //     img.src = "images/thewinston.jpg"
        //     img.style.width = "50px"
        //     div.append(img)
        // }

        boardContainer.append(div)
    }
}

function renderMessage() {
    messageContainer.textContent = message
}

// Little helper function
function emptyElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

/* EVENT LISTENER FUNTIONS */

function onSquareClick(index) {
    // Update line data
    lines[index] = 1

    // Update turn data
    if(turn === 1) {
        turn = 2
    }
    else {
        turn = 1
    }
    message = "Player " + turn + "'s turn"

    // update game over data
    if(lines.every(line => line === 1)) {
        gameOver = true;
        message = "Game Over"
    }
    
    // Rerender everything based on the data
    renderBoard()
    renderMessage()
}
