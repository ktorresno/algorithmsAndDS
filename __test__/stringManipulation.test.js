const { reverseString, reverseStringsInArray } = require('../decodeMessage');

test("The message decoded is a phrase!", () => {
    const tittle = ":htraE no od ot ffutS";
    const expectedTitle = "Stuff to do on Earth:";
    expect(reverseString(tittle)).toEqual(expectedTitle);
});

test("Array of messages well decoded!", ()=> {
    const messages = [
        "maerc eci yrT",
        "rewoT leffiE tisiV",
        "noom eht ot snamuh etacoleR",
        "egrahc ni stac tuP", 
    ];
    const expectedMessage = ["Try ice cream", "Visit Eiffel Tower",
        "Relocate humans to the moon", "Put cats in charge"];
    expect(reverseStringsInArray(messages)).toEqual(expectedMessage);

});