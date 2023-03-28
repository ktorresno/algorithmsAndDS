const getMaxWealth = require('../richestCustomer');

test('When there are 3 customers and two bank balance', () => {
    const input = [[1,5],[7,3],[3,5]];
    expect(getMaxWealth(input)).toEqual(10);
});

test('When there are 3 customers and three bank balance', () => {
    const input = [[2,8,7],[7,1,3],[1,9,5]];
    expect(getMaxWealth(input)).toEqual(17);
});

test('When there are 4 customers and two bank balance', () => {
    const input = [[10,5],[7,13],[3,55],[30,5]];
    expect(getMaxWealth(input)).toEqual(58);
});