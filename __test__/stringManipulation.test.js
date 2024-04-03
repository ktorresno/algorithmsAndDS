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

const { emojifyPhrase, emojifyWord } = require('../emojify');

test("emojifying a valid formatted word", () => {
    const heart = ":heart:";
    const heartEmoji= "💜";
    expect(emojifyWord(heart)).toEqual(heartEmoji);
});

test("Emojifying a phrase with two valid emoji strings.", () => {
    const msg = "I :heart: my :cat:";
    const expMsg = "I 💜 my 🐱";
    expect(emojifyPhrase(msg)).toEqual(expMsg);
});

test("Emojify a phrase that containst a word no registered as a valid emoji word", () => {
    const msg2 = "I :heart: my :elephant:";
    const expMsg= "I 💜 my elephant";
    expect(emojifyPhrase(msg2)).toEqual(expMsg);
});
