/**** Templates and Containers ****/

const chairsContainer = document.getElementById("chairs-container")
const cartContainer = document.getElementById("cart-container");

const emptyCartTemplate = document.getElementById("empty-cart-template");
const cartItemTemplate = document.getElementById("cart-item-template"); 
const chairTemplate = document.getElementById("chair-template");

/**** Data ****/

const CHAIRS = [
    {
        id: 0,
        title: "The Albert",
        description: "A sophisticated seat",
        image: "images/chair.jpg",
        price: "$499"
    },
    {
        id: 1,
        title: "The Sophia",
        description: "A friendly companion",
        image: "images/thesophia.jpg",
        price: "$899"
    },
    {
        id: 2,
        title: "The Winston",
        description: "Reliably reliable",
        image: "images/thewinston.jpg",
        price: "$299"
    },
    {
        id: 3,
        title: "The Rebecca",
        description: "Simply marvelous",
        image: "images/therebecca.jpg",
        price: "$350"
    }
]

const shoppingCart = [];

/*** Loading In *****/

window.addEventListener("load", () => {
    renderChairList();
    renderShoppingCart();
})

/*** Render Chairs ***/

function renderChairList() {
    // empty out the chairs container
    emptyElement(chairsContainer);
    // fill it up based on the CHAIRS array
    for(let chair of CHAIRS) {
        const chairNode = renderChair(chair)
        chairsContainer.appendChild(chairNode)
    }
}

function renderChair(chairData) {
    const chairElement = chairTemplate.cloneNode(true);
    chairElement.querySelector("#chair-image").src = chairData.image;
    chairElement.querySelector("#chair-title").textContent = chairData.title;
    chairElement.querySelector("#chair-description").textContent = chairData.description;
    chairElement.querySelector("#chair-buy-button").addEventListener("click", () => addToCart(chairData));
    return chairElement;
}

/*** Render Shopping Cart ***/

function renderShoppingCart() {
    emptyElement(cartContainer);
    shoppingCart.forEach(item => cartContainer.appendChild( renderShoppingCartItem(item) ))
    if(shoppingCart.length === 0) {
        cartContainer.appendChild(emptyCartTemplate.cloneNode(true));
    }
}

function renderShoppingCartItem(item) {
    const cartItem = cartItemTemplate.cloneNode(true);
    cartItem.querySelector("#item-number").textContent = item.number;
    cartItem.querySelector("#item-text").textContent = item.text;
    cartItem.querySelector("#remove-button").addEventListener("click", () => removeFromCart(item.id));
    return cartItem;
}

/**** Data Changing Function *****/

function addToCart(chair) {
    // Update the data
    let item = shoppingCart.find(i => i.id === chair.id);
    if(!item) {
        item = {
            id: chair.id,
            text: chair.title,
            number: 0
        }
        shoppingCart.push(item);
    }
    item.number++;
    // Rerender the shopping cart part of the page
    renderShoppingCart();
}

function removeFromCart(id) {
    // Update the data
    const item = shoppingCart.find(i => i.id === id);
    item.number--;
    if(item.number === 0) {
        shoppingCart.splice(shoppingCart.indexOf(item), 1);
    }
    // Rerender the shopping cart part of the page
    renderShoppingCart();
}

/**** Utility *****/ 

function emptyElement(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}


