
// State
// Data
const shoppingCart = ["The Winston"]

// Listening
// Respond to what the user does
// Clicks on the Add to Cart button we need to add that chair to the cart

function handleAddClick(chairName) {
    // Update the state
    shoppingCart.push(chairName)

    // Re-render based on the updated state
    renderShoppingCart()
}

// Rendering
// Display the data
// Show what is in the shopping cart in the page

const cartUL = $("#cart-container")
const emptyCartText = $("#empty-cart-text")

// BUTLER
function renderShoppingCart() {
    // clear out the cart
    // Not very efficient, but don't worry, React will do this better
    cartUL.empty()
    
    if(shoppingCart.length !== 0) {
        // remove the empty cart text
        emptyCartText.remove()
    }

    for(const cartItem of shoppingCart) {
        // make an li
        const newLi = $("<li/>")

        // give it the bootstrap class
        newLi.addClass("list-group-item")

        // put the text of the chair name inside the li
        newLi.text(cartItem)

        // move the li into the page (give an earth pass)
        cartUL.append(newLi)
    }
}

// call it when the page loads in
renderShoppingCart()

// Write this code:
// <li class="list-group-item">The Winston</li>
// <li class="list-group-item">The Sophia</li>