
/**** STATE ****/
const tiles = []
for(let i = 0; i < 25; i++) {
    tiles.push({
        isBomb: false,
        isVisible: false
    })
}

let gameStatus = "playing"

// flip some randomly to bombs
for(let i = 0; i < 4; i++) {
    // get a random index into an array
    const randomIndex = Math.floor(Math.random() * tiles.length)
    tiles[randomIndex].isBomb = true
    // BUG: if we get the same index twice, we'll only have 3 bombs
    // Cool can of worms with splice
}


/**** RENDERING ****/
const board = document.getElementById("board")
const message = document.getElementById("message")

function renderBoard() {
    // not the most efficient, but it's fine
    // when we get to react it will be much nicer
    board.innerHTML = ""

    // update the message
    message.textContent = gameStatus

    for(const tile of tiles) {

        /**** LISTENING ****/
        const handleSquareClick = () => {
            // update the state
            tile.isVisible = true
            
            // check if the game is over
            gameStatus = getGameStatus()

            // re-render / make it so
            renderBoard()
        }

        // Rendery
        const div = document.createElement("div")

        div.style.height = "40px"
        div.style.width = "40px"
        div.className = "text-center p-2"

        // if(tile.isVisible) {
        //     div.style.backgroundColor = "lightgray"
        // } else {
        //     div.style.backgroundColor = "green"
        // }
        div.style.backgroundColor = tile.isVisible ? "lightgray" : "green"

        // If it's a visible bomb, show it
        div.textContent = tile.isVisible && tile.isBomb ? "B" : ""

        div.addEventListener("click", handleSquareClick)

        board.appendChild(div)
    }
}

// render when the page loads in
renderBoard()

// HELPER FUNCTION

function getGameStatus() {
    // check if there's a tile that's visible and a bomb
    // return "lost"

    // check if all the non-bombs are visible
    // return "won"

    return "playing"
}