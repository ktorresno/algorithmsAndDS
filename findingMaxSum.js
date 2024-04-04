const maxSum = (arr) => {
    let maxSoFar = 0;
    let maxCurrent = arr[0];
    //const startTime = performance.now();
   // console.time();
    for (let i = 1; i < arr.length; i++) {
        maxCurrent += arr[i];
        //console.log('maxCurrent[' + i + ']: ' + maxCurrent);
        if (maxCurrent < 0) maxCurrent = 0;
        else if (maxSoFar < maxCurrent)
        maxSoFar = maxCurrent;
       // console.log('maxSoFar: ' + maxSoFar);
    }
    //let endTime = performance.now();
    //let timeDiff = (endTime - startTime)/1000; // in ms
    //console.log('RunTime in seconds: ', timeDiff);
    //console.timeEnd();
    return maxSoFar;
};

module.exports = maxSum;

//const arreglo = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; //[-1, -1, 7, -1, 4, -3, -2, 6];
// Linear algorithm

//const maximumSum = maxSum(arreglo);

// two pointers approach

//console.log(maximumSum);