
const $cartContainer = $("#cart-container");
const $emptyCartMessage = $("#empty-cart-text");

function addToCart(chair) {
    $emptyCartMessage.remove();

    $("<li/>").addClass("list-group-item").text(chair).append(
        $("<button/>")
            .addClass("btn btn-danger")
            .text("Delete")
            .on("click", (event) => {
                console.log(event);
                $(event.target).parent().remove()
            })
    ).appendTo($cartContainer);
}