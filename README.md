# test-project-play-wright

I. Pre-requisite

- Install `Nodejs` - the version must be greater than 14

II. Installation

1. Run command `npm install` to install all needed package
2. Run command `npm init playwright@latest` to install play-wright framework
   - Choose `TypeScript`
   - End-to-end tests : e2e (default)
   - Add a GitHub actions workflow : false (default)
   - Install Playwright browsers : true (default)
   - ? Override playwright.config.ts : false (default)

III. Run tests

1. Update login credentials in `login-credentials.ts` file
2. Run test with command `npx playwright test`
