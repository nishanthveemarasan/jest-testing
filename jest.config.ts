import type { Config } from '@jest/types';

// const baseDir= '<rootDir>/src/**/*.{ts,tsx}'
const baseDir = '<rootDir>/src/app/doubles';
const baseTestDir = '<rootDir>/src/test/doubles';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  verbose: true,
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom:[
    `${baseDir}/**/*.{ts,tsx}`,
  ],
  testMatch: [
    `${baseTestDir}/**/*.{spec,test}.{ts,tsx}`,
  ],
};

export default config;