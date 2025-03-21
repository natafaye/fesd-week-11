/***** STATE ******/
let availableDice = 6

let unbankedScore = 0
let players = ["Natalie", "Heather"]
let bankedScore = [500, 1000]
let currentPlayer = "Natalie"

let rollHistory = [
    {
        id: 0,
        player: "Natalie",
        meldedDie: [5, 3, 3, 3]
    },
    {
        id: 1,
        player: "Natalie",
        meldedDie: [5]
    },
    {
        id: 2,
        player: "Heather",
        meldedDie: [1, 5]
    }
]

/***** RENDERING ******/
const diceContainer = document.querySelector("#dice-container")
const meldArea = document.getElementById("meld-area")

function rollDice() {
    // clear out any dice in the dice container
    diceContainer.innerHTML = ""

    for (let i = 0; i < availableDice; i++) {
        // get a random dice rolls
        const randomRoll = Math.floor(Math.random() * 6) + 1 // I think

        // put a little div in the page with that roll in it
        const dieDiv = document.createElement("div") // this makes a new little div soul
        dieDiv.textContent = randomRoll
        dieDiv.className = "border border-black rounded p-3 flex align-items-center"
        dieDiv.style.width = "4rem"
        dieDiv.style.height = "4rem"
        // LISTENING
        dieDiv.addEventListener("click", () => {
            meldArea.appendChild(dieDiv)
            // dieDiv.removeEventListener("click") // TODO: Fix this later
            availableDice--
            if (availableDice === 0) {
                // if you were lucky and melded all six, you get six more to roll
                availableDice = 6
            }

            
            unbankedScore += 100 // This is not real Farkle rules
            renderScoreArea() // this will magically make the HTML match that new unbankedScore
        })

        diceContainer.appendChild(dieDiv)
    }
}
// When the game first loads in roll all the dice
rollDice()

function bankScore() {
    rollHistory.push({
        id: 4, // JANKY
        player: currentPlayer,
        meldedDie: [4, 3, 2] // JANKY
    })
    const currentIndex = players.indexOf(currentPlayer)
    bankedScore[currentIndex] += unbankedScore
    renderScoreArea()
    renderRollHistory() // magical make those areas up to date
}

// .append()
// document.createElement()
// document.getElementById()
// document.querySelector()
// .remove()
// .textContent

/* Options for Getting Content Into the Page */
// Option 1 - document.createElement() then parent.appendChild(newElement)
// Option 2 - .innerHTML and have it parse HTML from a string (this is most similar to React)

const scoreArea = document.getElementById("score-area")

// We should be able to run this function at any time and it will just
// make sure that the score area is up to date with the state/data
function renderScoreArea() {
    const currentIndex = players.indexOf(currentPlayer)
    scoreArea.innerHTML = `
        <table class="table border">
            <tr>
                <td class="${currentIndex === 0 ? "fw-bold" : ""}">${players[0]}</td>
                <td class="${currentIndex === 1 ? "fw-bold" : ""}">${players[1]}</td>
            </tr>
            <tr>
                <td class="${currentIndex === 0 ? "fw-bold" : ""}">${bankedScore[0]}</td>
                <td class="${currentIndex === 1 ? "fw-bold" : ""}">${bankedScore[1]}</td>
            </tr>
        </table>
        <p>Unbanked Score: ${unbankedScore}</p>
    `
}
renderScoreArea()


const historyArea = document.getElementById("history-area")
function renderRollHistory() {

    // Normal for loop
    // let html = `<ul class="list-group">`
    // for (let i = 0; i < rollHistory.length; i++) {
    //     html += `<li class="list-group-item">
    //         ${rollHistory[i].player} melded ${rollHistory[i].meldedDie.join(", ")}
    //     </li>`
    // }
    // html += `</ul>`
    // historyArea.innerHTML = html

    // Normal for loop with helper variable
    // let html = `<ul class="list-group">`
    // for (let i = 0; i < rollHistory.length; i++) {
    //     const historyItem = rollHistory[i]
    //     html += `<li class="list-group-item">
    //         ${historyItem.player} melded ${historyItem.meldedDie.join(", ")}
    //     </li>`
    // }
    // html += `</ul>`
    // historyArea.innerHTML = html

    // for-of loop
    // let html = `<ul class="list-group">`
    // for (const historyItem of rollHistory) {
    //     html += `<li class="list-group-item">
    //         ${historyItem.player} melded ${historyItem.meldedDie.join(", ")}
    //     </li>`
    // }
    // html += `</ul>`
    // historyArea.innerHTML = html

    // for each array method
    // let html = `<ul class="list-group">`
    // rollHistory.forEach((historyItem) => {
    //     html += `<li class="list-group-item">
    //         ${historyItem.player} melded ${historyItem.meldedDie.join(", ")}
    //     </li>`
    // })
    // html += `</ul>`
    // historyArea.innerHTML = html

    // map array method - what React uses
    // mappping each object to the HTML (in a string) that displays that object
    // the reason we use map so much is because it is an expression and for loops aren't
    // This is very close to professional React code
    historyArea.innerHTML = `
        <ul class="list-group">
            ${rollHistory.map((historyItem) =>
                `<li class="list-group-item">
                    ${historyItem.player} melded ${historyItem.meldedDie.join(", ")}
                </li>`
            ).join("")}
        </ul>
    `

    // historyArea.innerHTML = `
    //     <ul class="list-group">
    //         <li class="list-group-item">Natalie melded 5, 3, 3, 3</li>
    //         <li class="list-group-item">Natalie melded 1</li>
    //         <li class="list-group-item">Heather melded 5, 3, 3, 3</li>
    //     </ul>
    // `
}
renderRollHistory()

// let rollHistory = [
//     {
//         id: 0,
//         player: "Natalie",
//         meldedDie: [5, 3, 3, 3]
//     },
//     {
//         id: 1,
//         player: "Natalie",
//         meldedDie: [5]
//     },
//     {
//         id: 2,
//         player: "Heather",
//         meldedDie: [1, 5]
//     }
// ]


// array methods with arrays of objects .map() .filter() .find()
// innerHTML