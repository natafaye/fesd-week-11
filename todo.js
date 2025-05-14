const addTextbox = document.getElementById("add-input")
const taskList = document.getElementById("task-list")

// State
let tasks = ["Laundry", "Taxes", "Save the World"]
// eventually the data would come from an API (in Week 12!)

// Rendering Function
function renderTasks() {
    // Based on the state, make it show up in the page
    // clear out anything that's there now
    taskList.innerHTML = ""
    // Re-put it all back in (this is a little inefficient, but React will do this same thing perfectly efficiently)
    for (let i = 0; i < tasks.length; i++) {
        const newBabyLi = document.createElement("li")
        newBabyLi.innerHTML = tasks[i]

        // Listening Function
        newBabyLi.addEventListener("click", () => {
            // Update the state
            tasks.splice(i, 1)
            // Re-render based on the state
            renderTasks()
        })

        taskList.appendChild(newBabyLi)
    }
}

// As soon as the page loads in, render the data that we already have
renderTasks()

// Listening Function
function addTask() {
    // Update the state
    tasks.push(addTextbox.value)
    // Re-render based on the state
    renderTasks()
}

function sortAlphabetically() {
    // Updating the state
    tasks.sort() // sort it in place alphabetically
    // Re-rendering based on the state
    renderTasks()
}