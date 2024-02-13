import type { Config } from 'jest';

const customJestConfig: Config = {
    verbose: true,
    silent: false,
    workerThreads: false,
    rootDir: './src',
    testEnvironment: 'node',
    setupFiles: ['dotenv/config'],
    testRegex: '(/__tests__/.*|(\\.)(test|spec))\\.[jt]sx?$',
};

export default customJestConfig;
