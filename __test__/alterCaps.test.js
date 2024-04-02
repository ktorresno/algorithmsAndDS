const alterCaps = require('../alternatingCaps');

test("From the input string every other letter is capitalized correctly", () => {
    const inputStr = "When you visit Portland you have to go to VooDoo Donuts";
    const expectedStr = "WhEn yOu vIsIt POrTlAnD YoU HaVe tO Go tO VoODOo DOnUtS";
    expect(Object.is(alterCaps(inputStr), expectedStr)).toBe(true);
});

test("Input string should has each even position letter capitalized", () => {
    const inputStr = "I'm so happy it's Monday";
    const expectedStr = "I'M So hApPy iT'S MoNdAy";
    expect(alterCaps(inputStr)).toEqual(expectedStr);
});