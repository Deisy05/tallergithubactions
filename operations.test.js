const sum = require('./sum');

test('sums two numbers', () => {
  expect(sum(1, 2)).toBe(3);
});

const multi = require('./multi');

test('multiply two numbers', () => {
  expect(multi(3, 2)).toBe(6);
});

const div = require('./div');

test('divide two numbers', () => {
  expect(div(8, 2)).toBe(4);
  expect(div(-8,2)).toBe(-4);
  expect(div(-8,-2)).toBe(4);
});
