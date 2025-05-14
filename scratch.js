
function makeAnOmeletteMaker() {
    const specialSeasoning = "salt"
    // Function inside other curly brackets
    // This function brings with it all the varaibles that are in scope when it was made
    const omeletteMakingEmployee = (food) => {
        return food + " " + specialSeasoning
    }
    console.log("egg " + specialSeasoning)
    return omeletteMakingEmployee
}

const omeletteMaker = makeAnOmeletteMaker()


const scrambledEggs = omeletteMaker("scrambled eggs")


// Two main ways that we end up with a closure
// 1) passing around a callback function
// 2) attaching an event listener



const fillings = ["tomatoes", "cheese"]

function makeSandwiches() {
    const specialSeasoning = "salt"
    fillings.map(filling => filling + specialSeasoning)
}



// somewhere in the javascript source code
// function map(callback) {   callback()   }