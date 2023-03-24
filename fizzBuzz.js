/**
 *
    Given an integer n, return a string array answer (1-indexed) where:

    answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
    answer[i] == "Fizz" if i is divisible by 3.
    answer[i] == "Buzz" if i is divisible by 5.
    answer[i] == i (as a string) if none of the above conditions are true.  

    Example 1:
    Input: n = 3
    Output: ["1","2","Fizz"]

    Example 2:
    Input: n = 5
    Output: ["1","2","Fizz","4","Buzz"]

    Example 3:
    Input: n = 15
    Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
    
    Constraints:
    1 <= n <= 104
*/
/** 
    Intuition
    At first, it's needed to iterate thought 1 to n and to push into an array the right string
    depending on the index value.

    Approach
    Iterate from one to n and compare the current index in the iteraction if it's divisible by
    three and/or five by comparing if the rest result is zero, then assign to the string variable
    currValue the string 'Fizz' or 'Buzz'. Otherwise the string to add to the resultArr array 
    would be the current index as string.

    Complexity
    Time complexity:
    O(n) because we iterate throught each item from one to n

    Space complexity:
    O(1) is constant because we didn't created a structure proportionally equivalent 
    to the input.
*/
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const resultArr = [];
    for (let i = 1; i <= n; i++) {        
        let currString = '';
        if (i%3 === 0) {
            currString += 'Fizz';
        }
        if (i%5 === 0) {
            currString += 'Buzz';
        } 
        if (currString === '') {
            currString += i;
        }
        resultArr.push(currString);
    }
    return resultArr;
};

module.exports = fizzBuzz;