import type { Config } from "jest"

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/tests/**/*.test.ts"],
  verbose: false,
  modulePaths: [ "<rootDir>/src" ],
  rootDir: ".",
  moduleDirectories: ['node_modules', 'bower_components'],
}

export default config