
// DISCLAIMER: ALL INJURIES TO YOUR BRAIN OR YOUR OWN

// Factory for functions
function getTheGetDinnerFunction() {
    let seasoning = "salt and pepper"
    // backpack (closure) that brings all the variables in scope when the function is created
    const getDinner = () => { // closure backpack: let seasoning = "salt and pepper"
        const servingBowl = "spaghetti " + seasoning
        return servingBowl
    }
    return getDinner
}

const getDinnerFunction = () => getTheGetDinnerFunction()

const myPlate = getDinnerFunction()