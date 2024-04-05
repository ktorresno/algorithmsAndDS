const flatten = require('../flatNestedArrays');

test("Flatten to get only one array level when initially there are  two levels", () => {
    const testScores = [
        [39, 99, 76], 89, 98, [87, 56, 90], [96, 95], 40, 78, 50, [63]
    ];
    const expectedResult = [
        39, 99, 76, 89, 98, 87, 56, 90, 96, 95, 40, 78, 50, 63
    ];

    expect(flatten(testScores)).toEqual(expectedResult);
});

test("Flatten just one nested level, if there's a second it doesn't get ride of it.", () => {
    const kittyPrizes = [
        ["💰", "🐟", "🐟", ["💵", "🏆"]], "🏆", "💐", "💵", ["💵", "🏆"],
        ["🐟","💐", "💐"], "💵", "💵", ["🐟"], "🐟"
    ];
    const expectedResult = [
        "💰", "🐟", "🐟", ["💵", "🏆"], "🏆", "💐", "💵", "💵", "🏆", 
        "🐟","💐", "💐", "💵", "💵", "🐟", "🐟"
    ];

    expect(flatten(kittyPrizes)).toEqual(expectedResult);
});

const { awardBonuses } = require('../awardBonuses');

test("Calculate the bonus of each employee based on its ID", () => {
    const numArr = [1, 2,3,5,6,7,9,10,12];
    const expectedRes = [
        '1 - :(',
        '2 - :(',
        '3 - Vacation!',
        '4 - $100,000 bonus!',
        '5 - Vacation!',
        '6 - :(',
        '7 - Vacation!',
        '8 - $100,000 bonus!',
        '9 - Vacation!'
      ];
    expect(awardBonuses(numArr)).toEqual(expectedRes);
});