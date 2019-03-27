module.exports = {
  collectCoverage: true,
  coverageDirectory: '.coverage',
  // collectCoverageFrom: [
  // ],
  moduleDirectories: [
    'src',
    'node_modules',
  ],
  moduleFileExtensions: [
    'js',
    'ts',
    'json',
    'vue',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.[jt]sx?$': 'ts-jest',
    '^.+\\.vue$': 'vue-jest',
  },
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)',
  ],
};
