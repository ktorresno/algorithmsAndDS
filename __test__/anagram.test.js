const isAnagram = require('../anagram');

test("Two string are anagram to each other", () => {
    const str1 = "allergy";
    const str2 = "gallery";
    expect(isAnagram(str1, str2)).toBeTruthy();
});

test("Two string that aren't anagram!", () => {
    const str1 = "treasure";
    const str2 = "measure";
    expect(isAnagram(str1, str2)).toBeFalsy();
});