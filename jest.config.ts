import type { Config } from '@jest/types';

const baseDir= '<rootDir>/src/**/*.{ts,tsx}'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  verbose: true,
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom:[
    '<rootDir>/src/**/*.{ts,tsx}',
  ]
  
  // testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  // transform: {
  //   '^.+\\.tsx?$': 'ts-jest',
  // },
};

export default config;