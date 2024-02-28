/**** STATE ****/
// What information do I need to know to
// be able to render this app

let boardData = ["1","2","3","4","5","","","","","","","","","","","","","","","","","","","","","","",""]
let selectedNumber = 1

/**** RENDERING ****/
const boardContainer = document.getElementById("board")
const numberButtonsContainer = document.getElementById("number-buttons")

function renderSudokuBoard() {
    // clear out the old squares from the last render
    boardContainer.innerHTML = ""
    // render all the squares again
    for(let i = 0; i < 30; i++) {
        const div = document.createElement("div")
        div.className = "p-3 border"
        div.textContent = boardData[i]
        div.addEventListener("click", () => {
            // update the state
            boardData[i] = selectedNumber

            if(hasWon()) {
                boardData = []
                alert("You won!")
            }

            // rerender based on the state
            renderSudokuBoard()
        })
        //<div class="p-3 border"></div>
        boardContainer.appendChild(div)
    }
}

function renderNumberButtons() {
    numberButtonsContainer.innerHTML = ""
    for(let i = 1; i <= 9; i++) {
        const button = document.createElement("button")
        button.textContent = i
        button.className = "btn btn-outline-secondary me-1"
        // conditional rendering
        if(i === selectedNumber) {
            button.className = "btn btn-secondary me-1"
        }
        button.addEventListener("click", () => {
            selectedNumber = i
            renderNumberButtons()
        })
        numberButtonsContainer.appendChild(button)
    }
}

renderSudokuBoard()
renderNumberButtons()

/**** HELPER ****/

const winningBoard = ["1","2","3","4","5","6","7","","","","","","","","","","","","","","","","","","","","",""]

// for tic tac toe
// winningCombos = [[0, 1, 2], [1, 5, 9], [4, 5, 6]]

function hasWon() {
    for(let i = 0; i < boardData.length; i++) {
        if(boardData[i].toString() !== winningBoard[i].toString()) {
            return false
        }
    }
    return true
}