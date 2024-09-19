/**
 * Returns a random number between 0 and 1
 * @returns {random} - a random number between 0 and 1
*/
function random(): number {
    return parseInt(Math.random().toString());
}


/**
 * Returns a random number between n and o
 * @param {random} n - local variable used to store a number
 * @param {random} o - local variable used to store a number
 * @returns {random} - a random number between n and o
*/
function randomNumberBetweenNAndO(n: number, o: number): number {
    const minNumber = Math.min(n, o)
    const maxNumber = Math.max(n, o)

    return Math.random() * (maxNumber - minNumber) + minNumber;
}

/**
 * Returns a generate a number between 1 and x
 * @param {random} x - local variable used to store a number
 * @returns {random} - a random number between n and o
*/
function generateDieNumber(x: number): number {
    return parseInt((Math.random() * x).toString())
}

/**
 * Returns a randomized copy of an array
 * @param {random} arr - local variable used to store an array
 * @returns {random} - a randomized copy of an array
*/
function shuffleArray<T>(arr: T[]): T[] {
    // Create a copy of the original array
    const copyArr = [...arr];

    for (let i: number = copyArr.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));

        copyArr[i], copyArr[j] = copyArr[j], copyArr[i]
    }
    return copyArr
}

/**
 * Returns a random bool, weight results of true by t
 * @param {random} t - local variable used to weight results of true
 * @returns {random} - a randomized copy of an array
*/
function flip(t: number = 0.5): boolean {
    return Math.random() < t
}

/**
 * Returns a random number based on a description
 * @param {random} desc - local variable used to store a description string
 * @returns {random} - a random number based on a description
*/
function dieRoll(desc: string): number {
    // used to match and capture dice notation in a gaming format(e.x. XdY)
    const diceReg = /(\d*)d(\d+)/g;
    let total = 0;

    // Split the description on '+'
    const words = desc.split('+');

    for (let word of words) {
        let match;

        while((match = diceReg.exec(word)) !== null) {
            // If the number of dice is not given then the default is 1
            const numberOfDice = match[1] === '' ? 1 : parseInt(match[1], 10);
            const numberOfSides = parseInt(match[2], 10);

            for(let i: number = 0; i < numberOfDice; i += 1) {
                // Add to the total the number of dice sides
                total += Math.floor(Math.random() * numberOfSides) + 1
            }
        }
    }
    return total;
}


export { 
    random, 
    randomNumberBetweenZeroAndN, 
    randomNumberBetweenNAndO,
    generateDieNumber,
    shuffleArray,
    flip,
    dieRoll
};
