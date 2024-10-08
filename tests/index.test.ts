const { 
    random, 
    randomNumberBetweenZeroAndN, 
    randomNumberBetweenNAndO, 
    generateDieNumber,
    shuffleArray,
    flip,
    dieRoll
} = require("../dist/bundle.esm.js");

describe("Testing the random function", () => {
    test("Should be a number type", () => {
        const number = random();
        const result = random(number);

        expect(typeof result).toBe('number')
    })

    test("Should return a random number between 0 and 1", () => {
        const number = random();

        expect(random(number)).toBeGreaterThanOrEqual(0)
        expect(random(number)).toBeLessThanOrEqual(1)
    })
})

// --------------------------------------------------
// Test Suite for randomNumberBetweenZeroAndN function
describe("Testing the randomNumberBetweenZeroAndN function", () => {
    test("Should be a number type", () => {
        const n = 9;

        const result = randomNumberBetweenZeroAndN(n);
        expect(typeof result).toBe('number')
    })

    test("Should return a random number between 0 and n", () => {
        const n = 7;
        const number = randomNumberBetweenZeroAndN(n);
    
        expect(randomNumberBetweenZeroAndN(number)).toBeGreaterThanOrEqual(0)
        expect(randomNumberBetweenZeroAndN(0)).toBe(0)
    })
})

// --------------------------------------------------
// Test Suite for randomNumberBetweenNAndO function
describe("Testing the randomNumberBetweenNAndO function", () => {
    test("Should be a number type", () => {
        const n = 4;
        const o = 10;

        const result = randomNumberBetweenNAndO(n, o);
        expect(typeof result).toBe('number')
    })

    test("Should return a random number between n and o", () => {
        const n = 7;
        const o = 10;

        const number = randomNumberBetweenNAndO(n, o);
        expect(number).toBeGreaterThanOrEqual(n)
        expect(number).toBeLessThanOrEqual(o)
    })
})

// --------------------------------------------------
// Test Suite for generateDieNumber function
describe("Testing the generateDieNumber function", () => {
    let x;
    beforeAll(() => {
        x = 8
    })
    
    test("Should be a number type", () => {
        const result = generateDieNumber(x);
        expect(typeof result).toBe("number")
    })

    test("Should return a random number between 1 and x", () => {
        const number = generateDieNumber(0);

        expect(number).toBeLessThanOrEqual(x)
        expect(number).toBeLessThanOrEqual(1)
    })
})

// --------------------------------------------------
// Test Suite for shuffleArray function function
describe("Testing the shuffleArray function", () => {
    test("Should new array should be the same length as the original array", () => {
        const arr = [1, 2, 3, 4, 5]

        const shuffleArr = shuffleArray(arr);
        expect(shuffleArr.length).toBe(arr.length)
    })

    test("Should return a randomized copy of an array", () => {
        const arr2 = [1, 2, 3, 4, 5]
        const shuffle = shuffleArray(arr2);

        expect(shuffle.sort()).toEqual(arr2.sort());
    })

    test("Should work with an array that is empty", () => {
        const arr3 = [];
        const shuffleEmpty = shuffleArray(arr3);

        expect(shuffleEmpty).toEqual([]);
    })

    test("Should work with an array that has one number", () => {
        const arr4 = [2];
        const shuffleOne = shuffleArray(arr4);

        expect(shuffleOne).toEqual([2]);
    })

    test("Should with an array containing different data types", () => {
        const arr5 = [1, 'two', true, null, { id: 5 }];
        const shuffleData = shuffleArray(arr5)

        expect(shuffleData.sort()).toEqual(arr5.sort());
    })
})

// --------------------------------------------------
// Test Suite for flip function
describe("Testing the flip function", () => {
    test("Should be a boolean type", () => {
        const x = 10;

        const result = flip(x);
        expect(typeof result).toBe("boolean")
    })

    test("Should weight results of true by t", () => {
        const x = 8;
        const number = flip(x);

        expect(number).toBe(true)
    })
})

// --------------------------------------------------
// Test Suite for dieRoll function
describe("Testing the dieRoll function", () => {
    beforeAll(() => {
        Math.random = jest.fn(() => 0.5)
    })

    test("Should be a number type", () => {

        const result = dieRoll('1d6');
        expect(typeof result).toBe("number")
    })

    test("Should rolls a single d6", () => {
        expect(dieRoll('1d6')).toBeGreaterThanOrEqual(2)
    })

    test("Should rolls a two d6", () => {
        expect(dieRoll('2d6')).toBeGreaterThanOrEqual(8)
    })
})
