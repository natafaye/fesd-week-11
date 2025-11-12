/***** STATE *****/

// Old data, too simple for channel switching
// const messages = ["Hello!", "Goodbye!"]
// const channels = ["#general", "#my-class", "#another-channel"]

// Option 1:
// const channels = [
//     {
//         name: "#general",
//         messages: ["Hi!", "What's up?"]
//     },
//     {
//         name: "#my-class",
//         messages: ["I'm having a hard time"]
//     },
//     {
//         name: "#another-class",
//         messages: []
//     }
// ]

// Option 2:
let currentChannel = "#general"
const channels = ["#general", "#my-class", "#another-channel"]
const messages = [
    {
        text: "Hi!",
        channel: "#general"
    },
    {
        text: "What's up?",
        channel: "#general"
    },
    {
        text: "I'm having a hard time",
        channel: "#my-class"
    }
]
// Eventually, you could get this data from a database

/***** LISTENING *****/

function switchChannel(newChannel) {
    // Update the state
    currentChannel = newChannel
    // Re-render based on the state
    renderChannelButtons()
    renderMessages()
}

const myTextbox = document.querySelector("#textbox-thing")
function onMessageSend(event) {
    // Don't refresh the page you weirdo
    event.preventDefault()

    // Updating the state
    messages.push({
        text: myTextbox.value,
        channel: currentChannel
    })

    // Re-rendering based on that updated state
    renderMessages()

    // Clear out the textbox
    myTextbox.value = ""
}

/***** RENDERING *****/

const buttonsContainer = document.getElementById("channel-buttons-container")
function renderChannelButtons() {
    // clear out the out of date buttons
    buttonsContainer.replaceChildren()

    // for for-of forEach map
    channels.forEach(channelName => {
        // Make the button
        const channelButton = document.createElement("button")

        // Normal if version
        // channelButton.className = "btn btn-light"
        // if(channelName === currentChannel) {
        //     channelButton.className = "btn btn-success"
        // }

        // Ternary operator version
        channelButton.className = (channelName === currentChannel) ? "btn btn-success" : "btn btn-light"

        channelButton.textContent = channelName
        channelButton.addEventListener("click", () => switchChannel(channelName))

        // Move it into the page
        buttonsContainer.appendChild(channelButton)
    })
}

const paragraphContainer = document.getElementById("paragraph-container")
function renderMessages() {
    paragraphContainer.replaceChildren()

    // Filter for only messages in the current channel
    messages
        .filter(m => m.channel === currentChannel)
        .forEach(message => {

            // Make a new little paragraph soul
            const paraSoul = document.createElement("p")

            // Set the text of the paragraph to the message text
            paraSoul.textContent = message.text

            // Listen to clicks on the paragraph
            paraSoul.addEventListener("click", () => {
                // Have it remove itself from the page
                paraSoul.remove()
            })

            // Move the paragraph from the Great Before to the page
            paragraphContainer.appendChild(paraSoul)
        })
}

// Render when the page first loads in
renderChannelButtons()
renderMessages()