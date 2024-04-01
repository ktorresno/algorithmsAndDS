const threeConsecutiveOdds = require('../threeConsecutiveOdd');

test("There are three consecutive odd numbers.", () => {
    const input= [1,2,34,3,21,5,7,12];
    const resp = threeConsecutiveOdds(input);
    console.log('The result is: ', resp);
    expect(resp).toBeTruthy();
});

test("There are only two consecutive odd numbers", () => {
    const input= [2,34,3,21,12];
    expect(threeConsecutiveOdds(input)).toBeFalsy();
});

test("There aren't three consecutive odd numbers", () => {
    const input= [1,3,8,7,21];
    expect(threeConsecutiveOdds(input)).toBeFalsy();
});