// addition.test.js
const add = require('./calculator');

test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('adds 0 + 0 to equal 0', () => {
  expect(add(0, 0)).toBe(0);
});

test('adds -2 + 3 to equal 1', () => {
  expect(add(-2, 3)).toBe(1);
});

test('adds 10 + (-5) to equal 5', () => {
  expect(add(10, -5)).toBe(5);
});

// Add more test cases here...
