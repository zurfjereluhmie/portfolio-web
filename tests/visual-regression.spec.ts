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
      const prefix = locale === "en" ? "" : "/fr";
      pages.push({ name: `${path}-${locale}`, url: `${prefix}${route}` });
    }
  }

  for (const slug of getPortfolioSlugs()) {
    for (const locale of LOCALES) {
      const prefix = locale === "en" ? "" : "/fr";
      pages.push({
        name: `portfolio-${slug}-${locale}`,
        url: `${prefix}/portfolio/${slug}`,
      });
    }
  }

  return pages;
}

const PAGES = buildPages();

test.describe("visual regression", () => {
  test.beforeEach(async ({ page }) => {
    // Hide the custom cursor to avoid position-dependent flakiness
    await page.addInitScript(() => {
      const style = document.createElement("style");
      style.textContent = ".cursor-ball, .cursor-outline { display: none !important; }";
      document.head.appendChild(style);
    });
  });

  for (const { name, url } of PAGES) {
    test(name, async ({ page }) => {
      await page.goto(url);
      await page.waitForLoadState("networkidle");

      await expect(page).toHaveScreenshot(`${name}.png`, {
        fullPage: true,
        animations: "disabled",
        maxDiffPixelRatio: MAX_DIFF_PIXEL_RATIO,
      });
    });
  }
});
