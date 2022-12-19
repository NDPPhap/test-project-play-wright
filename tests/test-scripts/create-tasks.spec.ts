import { test, expect, chromium } from "@playwright/test";
import * as auth from "../../data/login-credentials";
import * as helper from "../../helper";

test("To verify create task and delete task function", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  // Open the login page
  const page = await context.newPage();
  await page.goto("https://todo-list-login.firebaseapp.com/");

  /**
   * Switch to new page - Github login page
   */
  // Waiting for github login page loading - after click [Signin with github] button
  const [newWindow] = await Promise.all([
    context.waitForEvent("page"),
    // Click on [login with Github] button
    await page.locator("a.btn-github").click(),
  ]);
  await newWindow.waitForLoadState();

  /**
   * Sign in
   */
  // Input username and password
  await newWindow.locator("#login_field").fill(auth.USER_NAME);
  await newWindow.locator("#password").fill(auth.PASS_WORD);
  // Click on [Sign in button]
  await newWindow.locator("input[type='submit']").click();
  // Re-Authentication if needed
  const isReAuth = await helper.is_selector_exist(
    newWindow,
    "button[data-octo-click='oauth_application_authorization']"
  );
  if (isReAuth == true)
    await newWindow
      .locator("button[data-octo-click='oauth_application_authorization']")
      .click();

  /**
   * Create task with random string
   */
  // Add 10 to-do list
  const stringLength = 2;
  for (let i = 0; i < 10; i++) {
    const randomString = helper.create_random_string(stringLength);
    await page
      .locator("//input[@ng-model='home.list']")
      .fill(randomString + "Task " + (i + 1));
    await page.locator("button.btn-success").click();
  }

  /**
   *
   * Log out
   */
  // Click on [Sign out] button
  await page.locator("//button[text()='Sign out']").click();
  await page.waitForLoadState();

  /**
   *
   * Login again with same account
   *
   */
  // Click on [login with Github] button
  const [newWindow2] = await Promise.all([
    context.waitForEvent("page"),
    // Click on [login with Github] button
    await page.locator("a.btn-github").click(),
  ]);
  await newWindow2.waitForLoadState();
  // Re-authentication if needed
  const isReAuth2 = await helper.is_selector_exist(
    newWindow2,
    "button[data-octo-click='oauth_application_authorization']"
  );
  if (isReAuth2 == true)
    await newWindow2
      .locator("button[data-octo-click='oauth_application_authorization']")
      .click();
  /**
   *
   * Delete the task from 5 - 10
   *
   */
  for (let i = 10; i >= 5; i--) {
    await page
      .locator("//li[" + i + "]//button[@ng-click='home.delete($index)']")
      .click();
  }

  // Close all page
  await browser.close();
});
