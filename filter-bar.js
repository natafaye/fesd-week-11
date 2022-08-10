/***** Data *****/

let sortBy = "name";

let maxPrice = 0;

/**** Event Listeners ****/

$("#sort-select").on("change", (event) => {
    // based on what they picked in the select we want to change that sortBy variable
    sortBy = event.target.value;

    // because we updated our data, we need to rerender the products
    renderProductList();
})

// STEPS:
// Something in the page triggers an event handler funciton
// Event handler function changes the data
// Event handler function calls rendering code
// Rendering code clears out and rerenders that part of the page taking into account the data