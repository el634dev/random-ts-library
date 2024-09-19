"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = random;
exports.randomNumberBetweenZeroAndN = randomNumberBetweenZeroAndN;
exports.randomNumberBetweenNAndO = randomNumberBetweenNAndO;
exports.generateDieNumber = generateDieNumber;
exports.shuffleArray = shuffleArray;
exports.flip = flip;
exports.dieRoll = dieRoll;
/**
 * Returns a random number between 0 and 1
 * @returns {random} - a random number between 0 and 1
*/
function random() {
    return parseInt(Math.random().toString());
}
/**
 * Returns a random number between 0 and n
 * @param {random} n - local variable used to return a number
 * @returns {random} - a random number between 0 and n
*/
function randomNumberBetweenZeroAndN(n) {
    return parseInt((Math.random() * n).toString());
}
/**
 * Returns a random number between n and o
 * @param {random} n - local variable used to store a number
 * @param {random} o - local variable used to store a number
 * @returns {random} - a random number between n and o
*/
function randomNumberBetweenNAndO(n, o) {
    var minNumber = Math.min(n, o);
    var maxNumber = Math.max(n, o);
    return Math.random() * (maxNumber - minNumber) + minNumber;
}
/**
 * Returns a generate a number between 1 and x
 * @param {random} x - local variable used to store a number
 * @returns {random} - a random number between n and o
*/
function generateDieNumber(x) {
    return parseInt((Math.random() * x).toString());
}
/**
 * Returns a randomized copy of an array
 * @param {random} arr - local variable used to store an array
 * @returns {random} - a randomized copy of an array
*/
function shuffleArray(arr) {
    // Create a copy of the original array
    var copyArr = __spreadArray([], arr, true);
    for (var i = copyArr.length - 1; i > 0; i -= 1) {
        var j = Math.floor(Math.random() * (i + 1));
        copyArr[i], copyArr[j] = copyArr[j], copyArr[i];
    }
    return copyArr;
}
/**
 * Returns a random bool, weight results of true by t
 * @param {random} t - local variable used to weight results of true
 * @returns {random} - a randomized copy of an array
*/
function flip(t) {
    if (t === void 0) { t = 0.5; }
    return Math.random() < t;
}
/**
 * Returns a random number based on a description
 * @param {random} desc - local variable used to store a description string
 * @returns {random} - a random number based on a description
*/
function dieRoll(desc) {
    var diceReg = /(\d*)d(\d+)/g;
    var total = 0;
    // Split the description on '+'
    var words = desc.split('+');
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        var match = void 0;
        while ((match = diceReg.exec(word)) !== null) {
            // If the number of dice is not given then the default is 1
            var numberOfDice = match[1] === '' ? 1 : parseInt(match[1], 10);
            var numberOfSides = parseInt(match[2], 10);
            for (var i = 0; i < numberOfDice; i += 1) {
                // Add to the total the number of dice sides
                total += Math.floor(Math.random() * numberOfSides) + 1;
            }
        }
    }
    return total;
}
