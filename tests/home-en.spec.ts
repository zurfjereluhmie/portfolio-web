import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/en");
});

test("has title", async ({ page }) => {
  await expect(page).toHaveTitle("Personal Portfolio | Jérémie Zurflüh");
});

test.describe("navigation", () => {
  test.describe("nav", () => {
    test.beforeEach(async ({ page }) => {
      await page.evaluate(() => {
        document
          .querySelector("#personnal-presentation")
          ?.scrollIntoView({ behavior: "instant" });
        const header = document.querySelector("header");
        if (header) {
          header.classList.remove("animate-out");
          header.classList.add("animate-in");
        }
        document.getAnimations().forEach((a) => a.finish());
      });
    });

    test("Nav Home link to stay", async ({ page }) => {
      await page.getByRole("link", { name: "Home" }).click();
      await expect(page).toHaveURL(/\//);
    });

    test("Nav Portfolio link redirect", async ({ page }) => {
      await page.getByRole("link", { name: "Portfolio" }).click();
      await expect(page).toHaveURL(/\/portfolio$/);
    });

    test("Nav About link redirect", async ({ page }) => {
      await page.getByRole("link", { name: "About" }).click();
      await expect(page).toHaveURL(/\/about$/);
    });
  });

  test.describe("social links", () => {
    test("check Github link", async ({ page }) => {
      const href = await page
        .locator(".social-button.github a")
        .getAttribute("href");
      expect(href).toBe("https://github.com/zurfjereluhmie");
    });

    test("check LinkedIn link", async ({ page }) => {
      const href = await page
        .locator(".social-button.linkedin a")
        .getAttribute("href");
      expect(href).toBe("https://www.linkedin.com/in/jeremie-zurfluh/");
    });
  });

  test("click the name to be redirected to /about", async ({ page }) => {
    await page.getByRole("link", { name: "I'm Jérémie" }).click();
    await expect(page).toHaveURL(/\/about$/);
  });

  test("click 'See my work' to be redirected to /portfolio", async ({
    page,
  }) => {
    await page.getByRole("link", { name: "See some of my works" }).click();
    await expect(page).toHaveURL(/\/portfolio$/);
  });
});
