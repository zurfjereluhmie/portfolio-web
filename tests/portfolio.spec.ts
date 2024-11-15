import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
	await page.goto("/portfolio");
});

test("has title", async ({ page }) => {
	await expect(page).toHaveTitle("Portfolio | Jérémie Zurflüh");
	await page.goto("/fr/portfolio");
	await expect(page).toHaveTitle("Portfolio | Jérémie Zurflüh");
});

test.describe("portfolio", () => {
	test("check all article links", async ({ page }) => {
		const links = await page.locator(".app-card").all();
		const linksHref = await Promise.all(links.map(async (link) => await link.getAttribute("href")));
		const englishLinksCount = linksHref.length;
		for (const link of linksHref) {
			if (!link) continue;
			const response = await page.goto(link);
			expect(response?.status()).toBe(200);
		}
		await page.goto("/fr/portfolio");
		const frenchLinks = await page.locator(".app-card").all();
		const frenchLinksHref = await Promise.all(frenchLinks.map(async (link) => await link.getAttribute("href")));
		expect(frenchLinksHref.length).toBe(englishLinksCount);

		for (const link of frenchLinksHref) {
			if (!link) continue;
			const response = await page.goto(link);
			expect(response?.status()).toBe(200);
		}
	});
});
