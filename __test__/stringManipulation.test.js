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

/*
    Replace each word formmated as an emoji with its corresponding emmoji when posible.
    Check if a lowercase word starts and ends with a colon. If it does, remove the colons
    and look up the word in the emoji object. 
*/
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

/*
    Counts how many times each letter of a phrase occurs. It should NOT count spaces and 
    should not be case sensitive (lowercase letter and its capital version should be considered 
    the same character).

    Return an object where the keys are each character in your phrase, and the value is how 
    many times that character appears in your phrase.
*/
const countChars = require('../frecuencyOfLetters');

test("Count correctly how many times each character into the phrase occurs", () => {
    const inputStr = "Peggy Porth";
    const expResult = { p: 2, e: 1, g: 2, y: 1, o: 1, r: 1, t: 1, h: 1 };

    expect(countChars(inputStr)).toEqual(expResult);

    const inputStr2 = "The quick brown fox jumps over the lazy dog";
    const expectedResult = { t: 2, h: 2, e: 3, q: 1, u: 2, i: 1, c: 1, 
        k: 1, b: 1, r: 2, o: 4, w: 1, n: 1, f: 1, x: 1, j: 1, m: 1, 
        p: 1, s: 1, v: 1, l: 1, a: 1, z: 1, y: 1, d: 1, g: 1 };

    expect(countChars(inputStr2)).toEqual(expectedResult);
});

/*
    Find odd words between two phrases.
    A word is considered odd when appears only once 
*/
const oddWords = require('../oddWords');

test("", () => {
    const a =  "Mirror  mirror   ";
    const b = "community is the greatest ";
    const expectedRes = ["community", "is", "the", "greatest"];
    expect(oddWords(a,b)).toEqual(expectedRes);

    const c =  "This community is the best  ";
    const d = "this community is the greatest ";
    const expectedRes2 = ["best","greatest"];
    expect(oddWords(c,d)).toEqual(expectedRes2);
});