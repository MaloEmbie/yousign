import type { Config } from 'jest';

const customJestConfig: Config = {
    preset: 'ts-jest',
    verbose: true,
    silent: false,
    workerThreads: false,
    rootDir: './src',
    testEnvironment: 'node',
    setupFiles: ['dotenv/config'],
    testRegex: '(/__tests__/.*|(\\.)(test|spec))\\.[jt]sx?$',
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json',
        },
    },
};

export default customJestConfig;
