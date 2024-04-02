/* 
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
https://leetcode.com/problems/generate-parentheses/

Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:
Input: n = 1
Output: ["()"]

Constraints:

1 <= n <= 8

Intuition
Approach
Complexity
Time complexity:
Space complexity:
 */

const generateParentheses = (n) => {
    let resp = [];
    generate( n, 0, 0, "", resp );
    return resp;
};

const generate = (n, open, close, str, resp) => {
    if ( open === n && open === close) {
        let arr = [...str];
        resp.push(arr.join(""));
        return;
    }

    if ( open < n && close < open ) {
        generate ( n, open+1, close, str+"(", resp );
        generate ( n, open, close+1, str+")", resp );
    }
    else if ( open < n && close === open ) {
        generate( n, open+1, close, str+"(", resp );
    }
    else if ( open === n && close < n ) {
        generate ( n, open, close+1, str+")", resp);
    }
}

module.exports = generateParentheses;