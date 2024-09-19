/**
 * Returns a random number between 0 and 1
 * @returns {random} - a random number between 0 and 1
*/
declare function random(): number;
/**
 * Returns a random number between 0 and n
 * @param {random} n - local variable used to return a number
 * @returns {random} - a random number between 0 and n
*/
declare function randomNumberBetweenZeroAndN(n: number): number;
/**
 * Returns a random number between n and o
 * @param {random} n - local variable used to store a number
 * @param {random} o - local variable used to store a number
 * @returns {random} - a random number between n and o
*/
declare function randomNumberBetweenNAndO(n: number, o: number): number;
/**
 * Returns a generate a number between 1 and x
 * @param {random} x - local variable used to store a number
 * @returns {random} - a random number between n and o
*/
declare function generateDieNumber(x: number): number;
/**
 * Returns a randomized copy of an array
 * @param {random} arr - local variable used to store an array
 * @returns {random} - a randomized copy of an array
*/
declare function shuffleArray<T>(arr: T[]): T[];
/**
 * Returns a random bool, weight results of true by t
 * @param {random} t - local variable used to weight results of true
 * @returns {random} - a randomized copy of an array
*/
declare function flip(t?: number): boolean;
/**
 * Returns a random number based on a description
 * @param {random} desc - local variable used to store a description string
 * @returns {random} - a random number based on a description
*/
declare function dieRoll(desc: string): number;
export { random, randomNumberBetweenZeroAndN, randomNumberBetweenNAndO, generateDieNumber, shuffleArray, flip, dieRoll };
