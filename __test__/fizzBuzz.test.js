const fizzBuzz = require('../fizzBuzz');

test('input 1 to get only one', () => {
    expect(fizzBuzz(1)).toStrictEqual(['1']);
});

test('input 2 to get only one and two', () => {
    expect(fizzBuzz(2)).toStrictEqual(['1', '2']);
});

test('input 3 to get our first Fizz(3)', () => {
    expect(fizzBuzz(3)).toStrictEqual(['1','2','Fizz']);
});

test('input 5 to get one Fizz(3) and a Buzz(5)', () => {
    expect(fizzBuzz(5)).toStrictEqual(['1', '2', 'Fizz', '4', 'Buzz']);
});

test('input 15 to get our first FizzBuzz', () => {
    expect(fizzBuzz(15)).toStrictEqual([
        '1',        '2',
        'Fizz',     '4',
        'Buzz',     'Fizz',
        '7',        '8',
        'Fizz',     'Buzz',
        '11',       'Fizz',
        '13',       '14',
        'FizzBuzz'
      ]);
});