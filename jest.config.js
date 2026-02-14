/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  // Add TypeScript transformer (requires ts-jest in devDependencies)
  preset: 'ts-jest',

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // Add common module file extensions
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
  ],

  // Map path aliases used by Next/TS to Jest
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    "^.+\\.(css|less|sass|scss)$": "identity-obj-proxy"
  },

  // Root dir
  rootDir: './',

  // Setup files
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  // Use v8 coverage provider
  coverageProvider: 'v8',
};

module.exports = config;
