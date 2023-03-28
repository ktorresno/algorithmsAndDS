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
 * 
 * Intuition
 * In this case we are going to track the quantity of times a person labelled 
 * a or b is found in each a or b position throughout the trust series.
 * 
 * Approach
 * In a first for loop, we'll have a new one dimention  array 'count' where
 * each element in the array holds a counter by person in the town. 
 * Basically, we're going to track if a person appears labelled as 'a', then 
 * we're going to decrement by 1 its count, else we're going to increment by 1 
 * the count if it's in the labelled 'b' position. 
 * In another for loop we are going to look for the person which has n-1 
 * followers(count), which would represent a town judge, otherwise there isn't 
 * a town judge.
 * 
 * Complexity
 * Time complexity: O(n)
 * Space complexity: O(1)
 * 
 */
function findJudge(n, trust){
    let count = new Array(n+1).fill(0);
    
    for (let [a,b] of trust) {
        count[a]--;
        count[b]++;
    }
    //console.log(count);
    for (let i = 1; i < n+1; i++) {
        if(count[i] == n-1) return i;                
    }
    return -1;
}

module.exports = findJudge;

/**
 * Another approach
   
  Intuition
    Since the judge is the only one who doesn't trust anybody, then the judge
    can't be in the position of 'a' labels and all 'a' labels should be paired
    to a label 'b' candidate.

  Approach
    Record in the iTrust hash map of trustee labels attached to a trusted 
    candidate. In the same way, record in the otherTrust hash map to whom other
    trust.

  Complexity
    Time complexity: O(n)
  Space complexity: O(n) created new structures proportionaly same size 
    of the trust input array.
 
var findJudge = function(n, trust) {
    const tlength = trust.length;
    if(tlength === 0 && n==1) return 1;
    let iTrust = {};
    let otherTrust = {};
    let judge = -1;

    for (let i =0; i<tlength; i++) {
        let trustee = trust[i][0];
        let trusted = trust[i][1];
        iTrust[trustee] = iTrust[trustee] ? iTrust[trustee].concat(trusted) : [trusted]; 
        otherTrust[trusted] = otherTrust[trusted] ? otherTrust[trusted].concat(trustee) : [trustee];
    }
    let keyArray = Object.keys(otherTrust);
    for (let i = 0; i<keyArray.length; i++) {
        let current = keyArray[i];
        if (otherTrust[current] && otherTrust[current].length == n-1 && !iTrust[current]) {
            judge = current*1;
        }
    }
    return judge;
};
*/