/**
 * @param {any} object
 * @param {any} classFunction
 * @return {boolean}
 */
const checkIfInstanceOf = (obj, classFunction) => {

    const invalidObj = theyAreNotPresent(obj, classFunction);
    if (invalidObj) return !invalidObj;
    return Object(obj) instanceof classFunction;

    // return obj?.__proto__ === classFunction?.prototype ? true :
    //     obj?.__proto__?.__proto__ === classFunction?.prototype ? true :
    //     obj?.__proto__?.__proto__?.__proto__ === classFunction?.prototype ? true : false;
};

const isObjectType = (obj) => {
    return typeof obj === 'object' &&  obj !== null && !Array.isArray(obj);
};

const theyAreNotPresent = (obj1, obj2) =>  {
    return (obj1 === null || obj2 === null ||
        obj1 === undefined || typeof obj2 !== 'function');
};

const removeDuplicatedValues = (arr) => {
    // When filter to get the first ocurrence of each element in the array, then sort ascending
    return arr.filter((item, index) => {
        return arr.indexOf(item) === index;
    }).sort((a, b) => a - b);
};

const checkForPalindrome = (text) => {
    const textToLower = text.toLowerCase();
    const reverseText = textToLower.split("").reverse().join("");
    return Object.is(reverseText, textToLower);
};

const factorialNumberByRecursion = (currentNumber) => {
    if (currentNumber <= 1) return 1;
    return currentNumber * factorialNumberByRecursion(currentNumber - 1);
};

module.exports = { checkIfInstanceOf, removeDuplicatedValues, checkForPalindrome,
    factorialNumberByRecursion };