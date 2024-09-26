// Testing random library, remove "type": "module" before running and after just add
const randomLib = require('../src/index');

// Return a random number between 0 and 1
const randomNumber = randomLib.random()
console.log(`Random number between 0 and 1: ${randomNumber.toFixed(2)}`)

// Return a random number between 0 and n
const randomNum = randomLib.randomNumberBetweenZeroAndN(4);
console.log(`Random number between 0 and n: ${randomNum.toFixed(2)}`)

// Returns a randomized copy of an array
const randomArray = randomLib.shuffleArray([1, 2, 3, 4])
console.log(`Shuffled Array: ${randomArray}`)

// Returns a random bool, weight results of true by t
const randomFlip = randomLib.flip()
console.log(`Results: ${randomFlip}`)

// Returns a random number based on a description
const randomDescription = randomLib.dieRoll("2d6")
console.log(`Dice total: ${randomDescription}`)

// Returns a generate a number between 1 and x
const randomDie = randomLib.generateDieNumber(4)
console.log(randomDie)