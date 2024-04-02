/**
    2618. Check if Object Instance of Class

    Write a function that checks if a given value is an instance of a given class or superclass. For this problem, an object is considered an instance of a given class if that object has access to that class's methods.

    There are no constraints on the data types that can be passed to the function. For example, the value or the class could be undefined.

    

    Example 1:

    Input: func = () => checkIfInstanceOf(new Date(), Date)
    Output: true
    Explanation: The object returned by the Date constructor is, by definition, an instance of Date.
    
    Example 2:

    Input: func = () => { class Animal {}; class Dog extends Animal {}; return checkIfInstanceOf(new Dog(), Animal); }
    Output: true
    Explanation:
    class Animal {};
    class Dog extends Animal {};
    checkIfInstance(new Dog(), Animal); // true

    Dog is a subclass of Animal. Therefore, a Dog object is an instance of both Dog and Animal.
    
    Example 3:

    Input: func = () => checkIfInstanceOf(Date, Date)
    Output: false
    Explanation: A date constructor cannot logically be an instance of itself.
    
    Example 4:

    Input: func = () => checkIfInstanceOf(5, Number)
    Output: true
    Explanation: 5 is a Number. Note that the "instanceof" keyword would return false. However, it is still considered an instance of Number because it accesses the Number methods. For example "toFixed()".
*/
const { checkIfInstanceOf, removeDuplicatedValues, checkForPalindrome,
    factorialNumberByRecursion } = require('../checkObjectInstanceOfClass.leetcode');

test('Check if new Date is instance of Date class', () => {
    expect(checkIfInstanceOf(new Date(), Date)).toBe(true);
});

test('Extends an object and validating if is an instance of', () => {
    class Animal {}; 
    class Dog extends Animal {};
    expect(checkIfInstanceOf(new Dog(), Animal)).toBe(true);
    expect(checkIfInstanceOf(Dog, Animal)).toBe(false);
});

test('Check if a number is instance of Number', () => {
    expect(checkIfInstanceOf(49, Number)).toBe(true);
});

test('Check when obj ISNT instance of the class', () => {
    expect(checkIfInstanceOf(Date, Date)).toBe(false);
    expect(checkIfInstanceOf([], undefined)).toBe(false);
    expect(checkIfInstanceOf(null, null)).toBe(false);
    expect(checkIfInstanceOf({}, [])).toBe(false);
    expect(checkIfInstanceOf([], [])).toBe(false);
    expect(checkIfInstanceOf([], {})).toBe(false);
    expect(checkIfInstanceOf({}, {})).toBe(false);
});

test('Remove duplicates into the array. From 8 to 6 items', () => {
    const arreglo = [10, 40, 25, 100, 1, 5, 25, 10];
    const expectedObject = [1, 5, 10, 25, 40, 100];
    expect(removeDuplicatedValues(arreglo)).toMatchObject(expectedObject);
});

test('Remove duplicates into the array. From 12 to 5 items', () => {
    const arreglo = [1, 2, 2, 3, 2, 3, 4, 5, 4, 1, 4, 5];
    const expectedObj = [1, 2, 3, 4, 5];
    expect(removeDuplicatedValues(arreglo)).toMatchObject(expectedObj);
});

test("It's palindrome", () => {
    const originalText1 = "Madam";
    expect(checkForPalindrome(originalText1)).toBeTruthy();

    const originalText2 = "2002";
    expect(checkForPalindrome(originalText2)).toBe(true);
});

test("It's NOT palindrome", () => {
    const originalText1 = "car";
    expect(checkForPalindrome(originalText1)).toBe(false);

    const originalText2 = "cacao";
    expect(checkForPalindrome(originalText2)).toBeFalsy();
});

test("Factorial of 5 is 120", () => {
    expect(factorialNumberByRecursion(5)).toEqual(120);
});

test("Factorial of 3 is 6", () => {
    
   /*  Array.prototype.last = function() {
        
        return this?.length == 0 ? -1 : this[this.length -1]; 
    };
    let nums = [1,2,3,4]
    console.log("+++++++ ", this?.length == 0, " | invocacion: ", nums.last()); */
    expect(Object.is(factorialNumberByRecursion(3), 6)).toBe(true);
});

