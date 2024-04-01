/**
    Given an integer array arr, return true if there are three consecutive odd numbers 
    in the array. Otherwise, return false. 
    Example 1:
    Input: arr = [2,6,4,1]
    Output: false
    Explanation: There are no three consecutive odds.

    Example 2:
    Input: arr = [1,2,34,3,4,5,7,23,12]
    Output: true
    Explanation: [5,7,23] are three consecutive odds.

    Constraints:
    1 <= arr.length <= 1000
    1 <= arr[i] <= 1000
 */
/**
    Intuition
    It's needed to iterate over the array to be able to identify 3 consecutive odd numbers.
    Approach
    Calculate the module operation between each element in the array and teh number two, 
    where its residue is not zero, to determinate if it's odd. Then if it's odd our variable 
    'count' will be incremented by 1 or assign to zero to reset our variable and start over
    next time we find another odd number in the serie.
    Complexity
    - Time complexity:
        O(n) because we iterate over the collection looking for 3 consecutive odd numbers.
    - Space complexity:
        O(1) because we didn't create a new structure proportional in size to our input arr.
*/
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let count = 0;
    for (let i = 0; i < arr.length && count < 3; i++) {
        count = ((arr[i] % 2 !== 0) ? count + 1 : 0);
        //console.log(`i= ${i} | count= ${count} | ${(arr[i] % 2 === 1)}`);
    }
    return count === 3;
};

module.exports = threeConsecutiveOdds;