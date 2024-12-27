/* eslint-env node */

/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ['<rootDir>/tests/unit'],

  testEnvironment: 'jest-environment-jsdom',

  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  transform: {
    '^.+\\.(t|j)sx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.test.json',
      },
    ],
  },

  extensionsToTreatAsEsm: ['.ts'],

  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFilesAfterEnv: ['<rootDir>/.jest/setupTests.ts'],

  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  // testRegex: "(/.*|(\\.|/)(test|spec))\\.tsx?$",

  // Module file extensions for importing
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node', 'mdx'],
  transformIgnorePatterns: ['/node_modules/(?!(@admiral-ds/)/)'],
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/.jest/svgrMock.js',
    '\\.svg\\?react$': '<rootDir>/.jest/svgrReactMock.js',
    '\\.(css|less)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/.jest/fileMock.js',
  },
};
