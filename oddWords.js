// Odd words

// Given 2 string set1 and set2, find all Odd Words.

// A word is called Odd when it appears only once of the sets, and does not 
// appear in the other set.
 
/* 
Constraints:
    - 1 <= set1.length, set2.length <= 200.
    - set1 and set2 contains of lowercase letters and spaces.
    - set1 and set2 have no leading or trailing spaces.
    - set1 and set2 contains words separated by a single space.

Example 1:
    Input: set1 = "This comunity is the best", 
           set2 = "This comunity is the greatest"
    output: ["best", "greatest"]

Example 2:
    Input: set1 = "ms ms",
           set2 = "google"
    output: ["google"]
*/

var solution = function(set1, set2) {
    const res = [];
    let strArr1 = set1.toLowerCase().trim().split(" ");
    let strArr2 = set2.toLowerCase().trim().split(" ");
    for (let i=0; i < strArr1.length; i++) { 
        let idxNextWord = (strArr1.indexOf(strArr1[i] )+ 1);
        if (strArr1[i] !== null && !strArr2.includes(strArr1[i])) {
            if (strArr1.indexOf(strArr1[i], idxNextWord) === -1 &&
                notFalsy(strArr1[i]))
                res.push(strArr1[i]);
        }
    }
    for (let i=0; i < strArr2.length; i++) {
        let idxWord = (strArr2.indexOf(strArr2[i] )+ 1);
        if (strArr2[i] !==null && !strArr1.includes(strArr2[i])) {
            if (strArr2.indexOf(strArr2[i], idxWord) === -1 &&
                notFalsy(strArr2[i]) )
                res.push(strArr2[i]);
        }
    }
    //console.log("REsult ood words: ",res)
    return res;
};
function notFalsy(value) {
    if (value !== false && value !== null && value !== undefined && value !== 0
        && value !== -0 && value !== 0n && value !== NaN && value !== "") {
        return true;
    }
}

/**
 * README
 * DO NOT CHANGE the code below
 */
function printArray(arr) {
    console.log(JSON.stringify(arr).replace(/,\s*/g, ','));
    //console.log(JSON.stringify(arr));
}
/* const a =  "Nice  Nice   ";
// "ms ms"; // "ms comunity is the best ";
const b = "comunity is the greatest ";
// "google boo"; // "ms comunity is the greatest ";
var output = solution(a, b);
output.sort();
printArray(output); */

module.exports = solution;
