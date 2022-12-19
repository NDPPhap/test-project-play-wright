# test-project-play-wright

## 1. Pre-requisite
- Install `Nodejs` - the version must be greater than 14.x.x

## 2. Installation

1. Run command `npm install` to install all needed package
2. Run command `npm init playwright@latest` to install play-wright framework
   - Choose `TypeScript`
   - End-to-end tests : `e2e` (default)
   - Add a GitHub actions workflow : `false` (default)
   - Install Playwright browsers : `true` (default)
   - Override playwright.config.ts : `false` (default)

## 3. Execute test scripts

1. Update login credentials in `login-credentials.ts` file
2. Run test with command `npx playwright test`
3. Run in debug mode `npx playwright test --debug`