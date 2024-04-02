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

test("Two string that are an anagram 2!", () => {
    const str1 = "eats";
    const str2 = "seat";
    expect(isAnagram(str1, str2)).toBeTruthy();
});

test("Two string that are an anagram 3!", () => {
    const str1 = "earth";
    const str2 = "heart";
    expect(isAnagram(str1, str2)).toBe(true);
});