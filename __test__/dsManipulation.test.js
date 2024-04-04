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