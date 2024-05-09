module.exports = {
    testPathIgnorePatterns: ['/node_modules/'],
    testMatch: [
      '<rootDir>/test/**/unit.test.js'
    ],
    setupFilesAfterEnv: [
      '<rootDir>/test/setupTests.js'
    ]
  };
  