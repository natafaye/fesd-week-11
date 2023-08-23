/**** PRETEND BACKEND ****/

const chairsFromBackend = [
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

const shoppingCartFromBackend = [
    {
        id: 2,
        text: "The Winston",
        number: 3
    }
]

/**** Templates and Containers ****/

const $chairsContainer = $("#chairs-container")
const $cartContainer = $("#cart-container");

const $emptyCartTemplate = $("#empty-cart-template");
const $cartItemTemplate = $("#cart-item-template"); 
const $chairTemplate = $("#chair-template");

/**** Data ****/

let shoppingCart = [];

let chairList = []

/**** RENDER CHAIRS ****/

function renderChairList() {
    $chairsContainer.empty();
    for(const chair of chairList) {
        const $chairCard = renderChairCard(chair);
        $chairsContainer.append($chairCard);
    }
}

function renderChairCard(chair) {
    const $chairElement = $chairTemplate.clone();
    $chairElement.find("#chair-image").attr("src", chair.image);
    $chairElement.find("#chair-title").text(chair.title);
    $chairElement.find("#chair-description").text(chair.description);
    $chairElement.find("#chair-buy-button").on("click", () => addToCart(chair.id));
    return $chairElement;
}

/**** RENDER SHOPPING CART ****/

function renderShoppingCart() {
    $cartContainer.empty();
    for(const item of shoppingCart) {
        const $shoppingListItem = renderShoppingListItem(item);
        $cartContainer.append($shoppingListItem);
    }
    if(shoppingCart.length === 0) {
        $cartContainer.append($emptyCartTemplate.clone());
    }
}

function renderShoppingListItem(item) {
    const $cartItem = $cartItemTemplate.clone();
    $cartItem.find("#item-number").text(item.number);
    $cartItem.find("#item-text").text(item.text);
    $cartItem.find("#remove-button").on("click", () => removeFromCart(item.id));
    return $cartItem;
}

/**** EVENT LISTENERS ****/

// Run when page has finished loading in
$(() => {
    chairList = chairsFromBackend
    renderChairList()
    shoppingCart = shoppingCartFromBackend
    renderShoppingCart()
})

function addToCart(chairId) {
    let chair = chairList.find(c => c.id === chairId);
    let item = shoppingCart.find(i => i.id === chair.id);
    if(!item) {
        item = {
            id: chair.id,
            text: chair.title,
            number: 0
        }
        shoppingCart.push(item);
    }
    item.number++

    renderShoppingCart()
}

function removeFromCart(chairId) {
    const item = shoppingCart.find(i => i.id === chairId);
    item.number--;
    if(item.number === 0) {
        shoppingCart.splice(shoppingCart.indexOf(item), 1);
    }

    renderShoppingCart();
}