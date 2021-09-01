/**** Templates and Containers ****/

const $chairsContainer = $("#chairs-container")
const $cartContainer = $("#cart-container");

const $emptyCartTemplate = $("#empty-cart-template");
const $cartItemTemplate = $("#cart-item-template"); 
const $chairTemplate = $("#chair-template");


/**** Data ****/

const shoppingCart = [];

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


/**** Initial Render *****/ 

$(() => {
    renderChairList();
    renderShoppingCart();
});

/**** Render Chairs ****/

// Build (and add to the page) the HTML for the entire list of chairs
function renderChairList() {
    $chairsContainer.empty();
    CHAIRS.forEach(chair => $chairsContainer.append(renderChair(chair)));
}

// Build (and return) the HTML for just one chair
function renderChair(chair) {
    const $chairElement = $chairTemplate.clone();
    $chairElement.find("#chair-image").attr("src", chair.image);
    $chairElement.find("#chair-title").text(chair.title);
    $chairElement.find("#chair-description").textContent = chair.description;
    $chairElement.find("#chair-buy-button").on("click", () => addToCart(chair));
    return $chairElement;
}


/**** Render Shopping Car ****/

// Build (and add to the page) the HTML for the entire shopping cart
function renderShoppingCart() {
    $cartContainer.empty();
    $.each(shoppingCart, (index, item) => $cartContainer.append(renderShoppingItem(item)));
    if(shoppingCart.length === 0) {
        $emptyCartTemplate.clone().appendTo($cartContainer);
    }
}

// Build (and return) the HTML for just one item in the shopping cart
function renderShoppingItem(item) {
    const $cartItem = $cartItemTemplate.clone();
    $cartItem.find("#item-number").text(item.number);
    $cartItem.find("#item-text").text(item.text);
    $cartItem.find("#remove-button").on("click", () => removeFromCart(item.id));
    return $cartItem;
}


/***** Event Listeners *****/

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