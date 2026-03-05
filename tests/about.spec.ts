import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/about");
});

test("has title", async ({ page }) => {
  await expect(page).toHaveTitle("About Me | Jérémie Zurflüh");
  await page.goto("/fr/about");
  await expect(page).toHaveTitle("À propos de moi | Jérémie Zurflüh");
});

test.describe("check all links", () => {
  test("all external links are valid", async ({ page }) => {
    const links = await page.locator("a").all();
    for (const link of links) {
      const href = await link.getAttribute("href");
      if (href && href.startsWith("http")) {
        const response = await page.goto(href);
        expect(response?.status()).toBe(200);
      }
    }
  });
});
