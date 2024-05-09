// integration.test.js
const add = require('../calculator');

test('integration test: calculates result correctly', () => {
  // Assuming calculate function interacts with other components/modules
  const result = add(2, 3);
  expect(result).toBe(5);
});
