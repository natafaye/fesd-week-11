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
        title: "The Joey",
        description: "Simply marvelous",
        image: "images/therebecca.jpg",
        price: "$350"
    }
]

$(() => {
    renderChairList();
    renderShoppingCart();
})

/**** Render Chairs ****/

// Build (and add to the page) the HTML for the entire list of chairs
function renderChairList() {
    $chairsContainer.empty();
    for(let chair of CHAIRS) {
        const $chairElement = renderChair(chair);
        $chairsContainer.append($chairElement);
    }
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
    shoppingCart.forEach( item => $cartContainer.append( renderShoppingItem(item) ) );
    if(shoppingCart.length === 0) {
        //$cartContainer.append($emptyCartTemplate.clone());
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

// $('<li></li>')
//         .text(chair)
//         .addClass('list-group-item')
//         .appendTo($cartContainer)
//         .append(
//             $('<button></button>')
//             .text("-")
//             .addClass("btn btn-danger btn-sm float-end")
//             .on("click", e => $(e.target).parent().slideUp())
//         );