test("The message decoded is a phrase!", () => {
    const { reverseString, reverseStringsInArray } = require('../decodeMessage');

    const tittle = ":htraE no od ot ffutS";
    const expectedTitle = "Stuff to do on Earth:";
    expect(reverseString(tittle)).toEqual(expectedTitle);

    // Array of messages well decoded!
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
test("emojifying a valid formatted word", () => {
    const { emojifyPhrase, emojifyWord } = require('../emojify');

    const heart = ":heart:";
    const heartEmoji= "💜";
    expect(emojifyWord(heart)).toEqual(heartEmoji);

    // Emojifying a phrase with two valid emoji strings.
    const msg = "I :heart: my :cat:";
    const expMsg1 = "I 💜 my 🐱";
    expect(emojifyPhrase(msg)).toEqual(expMsg1);

    // Emojify a phrase that containst a word no registered as a valid emoji word.
    const msg2 = "I :heart: my :elephant:";
    const expMsg2= "I 💜 my elephant";
    expect(emojifyPhrase(msg2)).toEqual(expMsg2);

});

/*
    Counts how many times each letter of a phrase occurs. It should NOT count spaces and 
    should not be case sensitive (lowercase letter and its capital version should be considered 
    the same character).

    Return an object where the keys are each character in your phrase, and the value is how 
    many times that character appears in your phrase.
*/
test("Count correctly how many times each character into the phrase occurs", () => {
    const countChars = require('../frecuencyOfLetters');

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
test("Odd word between two phrases", () => {
    const oddWords = require('../oddWords');

    const a =  "Mirror  mirror   ";
    const b = "community is the greatest ";
    const expectedRes = ["community", "is", "the", "greatest"];
    expect(oddWords(a,b)).toEqual(expectedRes);

    const c =  "This community is the best  ";
    const d = "this community is the greatest ";
    const expectedRes2 = ["best","greatest"];
    expect(oddWords(c,d)).toEqual(expectedRes2);
});

test("The string is a palindrome", () => {
    const isPalindrome = require('../palindromes');

    const str1 = "abba";
    expect(isPalindrome(str1)).toBe(true);

    const str2 = "civic";
    expect(isPalindrome(str2)).toBe(true);

    const str3 = "octopus";
    expect(isPalindrome(str3)).toBe(false);

    const str4 = "pumpkins";
    expect(isPalindrome(str4)).toBe(false);

    const str5 = "madam";
    expect(isPalindrome(str5)).toBe(true);
});

test("Convert to all caps a word or a sentence like you are yelling at someone", () => {
    const panic = require('../panicFunction');

    const str1 = "Winter is coming";
    const expectedStr = "WINTER 😱 IS 😱 COMING!";
    expect(panic(str1)).toEqual(expectedStr);

    const str2 = "summer";
    const expectedStr2 = "SUMMER!"
    expect(panic(str2)).toEqual(expectedStr2);

    const str3 = "I'm almost out of coffee";
    const expectedStr3 = "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!";
    expect(panic(str3)).toEqual(expectedStr3);
});

test("Remove duplicated from a string and from an array", () => {
    const { removeDupeChars,removeDupesFromArray } = require('../removeDuplicate');

    const passStr = "9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23";
    const expPass = "938dsabj2fcgq";
    expect(removeDupeChars(passStr)).toEqual(expPass);

    const eggScrambleRecipe = [
        "🥓 bacon",
        "🥓 bacon", 
        "🍳 eggs",
        "🫑 green peppers",
        "🧀 cheese",
        "🌶️ hot sauce",
        "🥓 bacon",
        "🥦 broccoli", 
        "🧀 cheese",
        "🥦 broccoli", 
        "🌶️ hot sauce"
    ]
    const expectedResult = [
        "🥓 bacon", 
        "🍳 eggs",
        "🫑 green peppers",
        "🧀 cheese",
        "🌶️ hot sauce",
        "🥦 broccoli",
    ];
    expect(removeDupesFromArray(eggScrambleRecipe)).toEqual(expectedResult);

});