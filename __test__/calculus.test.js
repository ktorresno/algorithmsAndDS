const maxSum = require('../findingMaxSum');

test("Encounter the max sum out of an array of negatives and positive ramdon values.", () => {

    const arreglo = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    const expResult = 6;

    expect(maxSum(arreglo)).toEqual(expResult);

});