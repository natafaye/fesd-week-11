const $list = $("#cart-container");
const $emptyListItem = $("#empty-cart-text");

function addToCart(chair) {
    $emptyListItem.remove();
    
    $("<li/>").addClass("list-group-item").text(chair)
        .append(
            $("<button/>").addClass("btn btn-danger").text("Delete")
            .on("click", (event) => {
                //event.target.parentNode.remove(); // vanilla javascript
                $(event.target).parent().remove()
            })
        )
        .appendTo($list)
}