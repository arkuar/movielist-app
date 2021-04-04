module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: '.',
  moduleNameMapper: {
    '@common/(.*)': '<rootDir>/common/$1'
  }
};