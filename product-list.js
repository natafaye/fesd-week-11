/***** Data *****/

const products = [
    {
        id: 0,
        name: "Headphones",
        price: 50
    },
    {
        id: 1,
        name: "Trash Can",
        price: 15
    },
    {
        id: 2,
        name: "Plant",
        price: 130
    },
]

/**** Rendering Code *****/

const $productsContainer = $("#products-container");

$(() => {
    renderProductList();
})

function renderProductList() {
    // Clear out any old rendered stuff
    $productsContainer.empty();

    const $productDivs = products
        // Make a copy
        .slice()
        // Sort it
        .sort((a, b) => {
            // Sort by name by default
            let comparerA = a.name.toUpperCase();
            let comparerB = b.name.toUpperCase();
            // But if they picked price, sort by that
            if(sortBy === "price") {
                comparerA = a.price
                comparerB = b.price
            }
            // sorting comparing code
            if (comparerA < comparerB) {
                return -1;
            }
            if (comparerA > comparerB) {
                return 1;
            }
            return 0;
        })
        // Map it to how we want it displayed
        .map(product => renderProduct(product))
    // Put them in the page
    $productsContainer.append($productDivs);
}

function renderProduct(product) {
    return $("<div/>").text(product.name + " - $" + product.price).addClass("p-3 me-3 mb-3 border")
}