const nataliesSandwich = ["bread", "cheese", "bread"]

function eatTheSandwich(sandwichToEat) { // sandwichToEat is pointed to the same array that nataliesSandwich is pointed to
    // sandwichToEat = [] // points sandwichToEat to a new empty array
    sandwichToEat.splice(0, sandwichToEat.length) // grabs the array sandwichToEat is pointed to, and clears it out
}

console.log(nataliesSandwich)
eatTheSandwich(nataliesSandwich)
console.log(nataliesSandwich)


let age = 10

function add5ToIt(number) { // number is given a copy of the number in the age variable
    number++
}

console.log(age)
add5ToIt(age)
console.log(age)