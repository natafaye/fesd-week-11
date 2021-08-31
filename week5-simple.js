
const cartContainer = document.getElementById("cart-container");
const emptyCartText = document.getElementById("empty-cart-text");
const shoppingCart = [];

function addToCart(chairName) {
    // Update the data
    shoppingCart.push(chairName)

    // get rid of the empty message
    emptyCartText.remove();

    // Create and set up list item and the button inside
    const listItem = renderListItem(chairName);

    // Add list item to the ul (and the page);
    cartContainer.appendChild(listItem);
}

function renderListItem(chairName) {
    // create and set up list item
    const newListItem = document.createElement("li");
    newListItem.classList.add("list-group-item")
    newListItem.textContent = chairName;

    // Create and set up button
    const button = document.createElement("button");
    button.classList.add("btn");
    button.classList.add("btn-danger");
    button.classList.add("btn-sm");
    button.classList.add("float-end");
    button.textContent = "-";
    button.addEventListener("click", () => newListItem.remove())

    // Add the button to the list item
    newListItem.appendChild(button);

    return newListItem;
}

// We aren't using this function, but we could instead of the arrow function on line 33
function removeFromCart(e) {
    e.target.parentNode.remove();
}