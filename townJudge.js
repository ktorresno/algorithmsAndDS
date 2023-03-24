/* 
    In a town, there are N people labelled from 1 to N.
    There is a rumor that one of these people is secretly the town judge.

    if the town exist, then:

    1) The town judge trusts nobody.
    2) Everybody (except for the town judge) trusts the town judge.    
    3) There is exactly one person that satisfied properties 1 and 2.

    You are given trust, an array of pairs trust(i) = (a, b) representing
    that the person labeled a trusts the person labeled b.

    If the town judge exist and can be identified, return the label of the 
    town judge. Otherwise return -1.

    Example 1:
    Input: N = 2, trust= [[1,2]]
    Output: 2

    Example 2:
    Input: N = 3, trust = [[1,3],[2,3]]
    Output: 3

    Example 3:
    Input: N = 3, trust = [[1,3],[2,3],[3,1]]
    Output: -1

    Example 4:
    Input: N = 3, trust = [[1,2],[2,3]]
    Output: -1

    Example 5:
    Input: N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]] 
                          [[1,2],[1,3],[2,1],[2,3],[1,4],[4,3],[4,1]]
    Output: 3
*/

/**
 * @param {Number} n
 * @param {Number[][]} trust
 * @return {Number}
 */
function findJudge(n, trust){
    let count = new Array(n+1).fill(0);
    
    for (let [a,b] of trust) {
        count[a]--;
        count[b]++;
    }
    console.log(count);
    for (let i = 1; i < n+1; i++) {
        if(count[i] == n-1) return i;                
    }
    return -1;
}

module.exports = findJudge;

/**
 
var findJudge = function(n, trust) {
    const trustedBy = []
    let judge = -1;
    const tlength = trust.length;
    if (n < 1) return -1;
    if(tlength === 0 && n==1) return 1;
    if(tlength === 0) return -1;

    const trustedIn = trust[0][1];
    if (n===2 && tlength ===1) return trust[0][1];

    for (let i =0; i<tlength; i++) {
        if(trustedIn == trust[i][1]) {
            trustedBy.push(trust[i][0]);
        }
        if (trustedBy.length === n-1 && trustedBy.indexOf(trustedIn) == -1)
            judge = trustedIn;
        if (trust[i][0] === trustedIn)
            judge = -1;
    }
    return judge;
};
 */