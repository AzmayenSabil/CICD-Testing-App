module.exports = {
    testPathIgnorePatterns: ['/node_modules/'],
    testMatch: [
      '<rootDir>/test/**/unit.test.js',
      '<rootDir>/test/**/integration.test.js' // New pattern for integration tests
    ]
  };
  