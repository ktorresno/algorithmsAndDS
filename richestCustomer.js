'use strict';
/**
    You are given an m x n integer grid accounts where accounts[i][j] is the amount of money 
    the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.
    
    A customer's wealth is the amount of money they have in all their bank accounts. The 
    richest customer is the customer that has the maximum wealth.
    
    Example 1:
    Input: accounts = [[1,5],[7,3],[3,5]]
    Output: 10
    Explanation: 
    1st customer has wealth = 6
    2nd customer has wealth = 10 
    3rd customer has wealth = 8
    The 2nd customer is the richest with a wealth of 10.

    Example 2:
    Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
    Output: 17

    Constraints:
    m == accounts.length
    n == accounts[i].length
    1 <= m, n <= 50
    1 <= accounts[i][j] <= 100
*/
/** 
    Intuition
    Each row represents customer and each column represents each bank account 
    balance for a given customer.

    Approach
    The 'wealthMax' variable will track the maximum amount found over the iteraction
    from the inner loop, by comparing the previous value found in the outher loop 
    with the current sum performed in the inner loop and replacing its value if and
    only if the current sum is greater than the actual value into our 'wealthMax' variable. 

    Complexity
    Time complexity:
    O(nm) because we iterate throught each item from one to n and in the nested
    loop we go through each column to sum them.

    Space complexity:
    O(1) is constant because we didn't create another data structure proportional
    in size to our input to help us find our solution.
*/
/**
 * @param {Number[][]} accounts
 * @return {Number}
 */
let maximumWealth = function(accounts) {
    //const wealth = []; 
    let wealthMax = 0;
    for (let i = 0; i < accounts.length; i++) {
        let currentAcc = accounts[i];
        let sum = 0;
        for (let j = 0; j < currentAcc.length; j++) {
            sum += currentAcc[j];
        }
        //wealth.push(sum);
        wealthMax = wealthMax < sum ? sum : wealthMax;
    }
    //return Math.max(...wealth);
    return wealthMax;
}

module.exports = maximumWealth;


// Another solution approach: Using lodash and map to solve it.
/* 
    let _ = require('lodash/math');
    //_.sum is a math utility from Lodash which sum all the elements of an array.
    let maximumWealthOneLineSolution = Math.max(...input.map(row => _.sum(row)));
    console.log(maximumWealthOneLineSolution);
*/
/**
 * Another approach
# Approach
Record in a new array the 'wealth' for each customer. Into the inner loop we sum 
the ammount in each bank account and added it to the 'wealth' array. Then when 
the outher loop by customers end we are going to return the max wealth by ordering
the elements in a descending order and taking the first element in the array.

# Complexity
- Time complexity:
O(nm) because we iterate through each row and nested into we have an additional 
iteration loop to go through each column to summarize all the amounts into each 
bank for each customer.

- Space complexity:
O(1) it's constant because we didn't create a new structure proportional in 
size to our input matrix.
*/
/**
 * @param {number[][]} accounts
 * @return {number}
 *
var maximumWealth = function(accounts) {
    const wealth = [];
    for (let i = 0; i < accounts.length; i++) {
        let currentAcc = accounts[i];
        let sum = 0;
        for (let j=0; j < currentAcc.length; j++ ) {
            sum += currentAcc[j];
        }
        wealth.push(sum);
    }
    return wealth.sort((a,b) => a - b).reverse()[0];
};
*/