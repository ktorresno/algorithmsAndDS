const { now } = require('lodash');
const generateParentheses = require('../lc_22_parentheses');

test("The parentheses level and order is correct", () => {
    const n = 3;
    const expectedStr = [ '((()))', '(()())', '(())()', '()(())', '()()()' ];
    const resp = generateParentheses(n);
    console.log("Parentheses: ",resp);
    expect(resp).toMatchObject(expectedStr);
});

test ("Only one level parentheses", () => {
    const n = 1;
    const expectedStr = ["()"];
    expect(generateParentheses(n)).toMatchObject(expectedStr);
});

test("", () => {
    const expectedStr = [
        '(((())))', '((()()))',
        '((())())', '((()))()',
        '(()(()))', '(()()())',
        '(()())()', '(())(())',
        '(())()()', '()((()))',
        '()(()())', '()(())()',
        '()()(())', '()()()()'
      ];
      const n = 4;
      // To compare array it works toEqual and toMatchObject
      expect(generateParentheses(n)).toEqual(expectedStr);
});