import { readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { test, expect } from "@playwright/test";

/**
 * Visual Regression Tests
 *
 * These tests compare each page against a stored reference screenshot.
 * - First run: generates the golden reference files (stored in visual-regression.spec.ts-snapshots/)
 * - Subsequent runs: diff against the reference; the test fails if more than
 *   MAX_DIFF_PIXEL_RATIO of pixels differ.
 *
 * To update the reference screenshots after intentional UI changes, run:
 *   npx playwright test visual-regression --update-snapshots
 */

const MAX_DIFF_PIXEL_RATIO = 0.05; // 5% of pixels allowed to differ

const LOCALES = ["en", "fr"] as const;

/** Static pages defined in pages/ (not driven by content files). */
const STATIC_PAGES = [
  { path: "home", route: "/" },
  { path: "about", route: "/about" },
  { path: "portfolio", route: "/portfolio" },
];

/** Dynamically discovered from content/en/portfolio/ — picks up new items automatically. */
function getPortfolioSlugs(): string[] {
  const here = dirname(fileURLToPath(import.meta.url));
  const dir = join(here, "../content/en/portfolio");
  return readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

function buildPages() {
  const pages: { name: string; url: string }[] = [];

  for (const { path, route } of STATIC_PAGES) {
    for (const locale of LOCALES) {
      pages.push({ name: `${path}-${locale}`, url: `/${locale}${route}` });
    }
  }

  for (const slug of getPortfolioSlugs()) {
    for (const locale of LOCALES) {
      pages.push({
        name: `portfolio-${slug}-${locale}`,
        url: `/${locale}/portfolio/${slug}`,
      });
    }
  }

  return pages;
}

const PAGES = buildPages();

test.describe("visual regression", () => {
  // Font rendering varies across browsers and platforms
  test.skip(
    ({ browserName }) => browserName !== "chromium",
    "Visual regression runs on Chromium only",
  );

  test.beforeEach(async ({ page }) => {
    // Hide the custom cursor to avoid position-dependent flakiness
    await page.addInitScript(() => {
      const style = document.createElement("style");
      style.textContent =
        ".cursor-ball, .cursor-outline { display: none !important; }";
      document.head.appendChild(style);
    });
  });

  for (const { name, url } of PAGES) {
    test(name, async ({ page }) => {
      await page.goto(url);
      await page.waitForLoadState("networkidle");

      // Wait for all images to finish decoding so they don't reflow between
      // the two consecutive screenshots toHaveScreenshot takes internally.
      await page.evaluate(() =>
        Promise.all(
          Array.from(document.images).map(
            (img) =>
              img.complete ||
              new Promise((resolve) => {
                img.onload = img.onerror = resolve;
              }),
          ),
        ),
      );

      // <main> is a fixed-height scroll container (height: 100dvh, overflow-y: scroll).
      // Playwright's fullPage screenshot only captures the viewport in that case.
      // Inject after hydration so Nuxt doesn't overwrite it.
      await page.addStyleTag({
        content:
          "main { height: auto !important; overflow-y: visible !important; }",
      });

      await expect(page).toHaveScreenshot(`${name}.png`, {
        fullPage: true,
        animations: "disabled",
        maxDiffPixelRatio: MAX_DIFF_PIXEL_RATIO,
      });
    });
  }
});
