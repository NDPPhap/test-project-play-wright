import { Page } from "@playwright/test";

export function create_random_string(string_length: number): string {
  let random_string: string = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < string_length; i++) {
    random_string += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return random_string;
}

export async function is_selector_exist(
  page: Page,
  selector: string
): Promise<boolean> {
  let isExist = true;
  try {
    await page.waitForSelector(
      "button[data-octo-click='oauth_application_authorization']",
      { timeout: 5000 }
    );
  } catch (error) {
    isExist = false;
    console.log("The element didn't appear.");
  }
  return isExist;
}
