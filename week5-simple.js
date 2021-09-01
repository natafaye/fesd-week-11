
const cartContainer = $("#cart-container");
const emptyCartText = $("#empty-cart-text");
const shoppingCart = [];

function addToCart(chairName) {
    shoppingCart.push(chairName)
    emptyCartText.remove();
    const listItem = renderListItem(chairName);
    cartContainer.append(listItem);
}

function renderListItem(chairName) {
    const newListItem = $("<li/>")
        .text(chairName)
        .addClass("list-group-item")
        .append(
            $("<button/>")
                .text("-")
                .addClass("btn btn-danger btn-sm float-end")
                .on("click", () => newListItem.remove())
        )
    return newListItem;
}
