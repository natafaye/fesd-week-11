
/******* State (data) *******/

// Another data storage option
// const boats = [
//     {
//         type: '🚤',
//         location: getRandomNumber(0, 5),
//         hit: true
//     },
//     {
//         type: '🚢',
//         location: getRandomNumber(0, 5),
//         hit: false
//     },
//     {
//         type: '⛵',
//         location: getRandomNumber(0, 5),
//         hit: false
//     }
// ]
const boats = ['', '🚤', '', '', '🚢', '⛵']
const shots = []


/******* Rendering *******/

// I'm naming my variables with $ just to remind me that I'm using jquery
const $shotBoard = $("#shot-board")
const $boatBoard = $("#boat-board")

function renderShotBoard() {
    let HTML = ""
    for(let spot = 0; spot < 6; spot++) {
        // i is the location

        // Statement
        let shotAtSpot
        if(shots.includes(spot)) {
            shotAtSpot = '⚪'
        } else {
            shotAtSpot = ''
        }
        // CAN'T DO THIS WITH A STATEMENT
        // let shotAtSpot = if(shots.includes(spot)) { shotAtSpot = '⚪' } else { shotAtSpot = '' }

        // Expression
        // let shotAtSpot = shots.includes(spot) ? '⚪' : ''

        // Expression shoved straight in there
        HTML += `
            <div class="square" onclick="handleSquareClick(${spot})">
                ${shots.includes(spot) ? '⚪' : ''}
            </div>
        `
        // Alternative: create the div and then append it
    }
    $shotBoard.html(HTML) // shotBoard.innerHTML = HTML
}
renderShotBoard() // run when the page loads in

function renderBoatBoard() {
    let HTML = ""
    for(let i = 0; i < 6; i++) {
        // i is the location index
        const boatAtSpot = boats[i] // either empty or the boat emoji to show
        HTML += `<div class="square">${boatAtSpot}</div>`
        // Alternative: create the div and then append it
    }
    $boatBoard.html(HTML)
}
renderBoatBoard()


/******* Listening *******/

function handleSquareClick(spot) {
    // Updating state
    shots.push(spot)
    // Re-render based on that updated state so that the user sees the change
    renderShotBoard()
}
// Alternatively: We could have the computer randomly pick a spot to shoot



/******* Utilities *******/
function getRandomNumber(lowest, highest) {
    return Math.floor(Math.random() * (highest + 1 - lowest)) + lowest
}