import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/fr");
});

test("has title", async ({ page }) => {
  await expect(page).toHaveTitle("Portfolio personnel | Jérémie Zurflüh");
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
      await page.getByRole("link", { name: "Accueil" }).click();
      await expect(page).toHaveURL(/\/fr$/);
    });

    test("Nav Portfolio link redirect", async ({ page }) => {
      await page.getByRole("link", { name: "Portfolio" }).click();
      await expect(page).toHaveURL(/fr\/portfolio$/);
    });

    test("Nav About link redirect", async ({ page }) => {
      await page.getByRole("link", { name: "À propos" }).click();
      await expect(page).toHaveURL(/\/fr\/about$/);
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
    await page.getByRole("link", { name: "Je suis Jérémie" }).click();
    await expect(page).toHaveURL(/fr\/about$/);
  });

  test("click 'See my work' to be redirected to /portfolio", async ({
    page,
  }) => {
    await page
      .getByRole("link", { name: "Voir quelques-unes de mes réalisations" })
      .click();
    await expect(page).toHaveURL(/fr\/portfolio$/);
  });
});
