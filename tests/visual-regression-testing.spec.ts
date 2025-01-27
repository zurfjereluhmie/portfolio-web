import { test, expect, type Page } from "@playwright/test";

const setupPage = async (page: Page, url: string, snapshotName: string | readonly string[]) => {
	await page.goto(url);
	await page.waitForLoadState("domcontentloaded");

	await page.addStyleTag({
		content:
			"* { animation-duration: 0s !important; transition-duration: 0s !important; animation-delay: 0s !important; transition-delay: 0s !important; }",
	});

	await page.evaluate(() => {
		const elements = document.querySelectorAll(".awesome-social-button");
		elements.forEach((element) => element.remove());
	});

	// replace all images with a placeholder
	await page.evaluate(() => {
		const images = document.querySelectorAll("img");
		images.forEach((img) => {
			img.src = "https://via.placeholder.com/150";
		});
	});

	expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(snapshotName);
};

test.describe("EN - Visual regression testing", () => {
	test("home page", async ({ page }) => {
		await setupPage(page, "/en", "en-home-page.png");
	});

	test("about page", async ({ page }) => {
		await setupPage(page, "/en/about", "en-about-page.png");
	});

	test("portfolio page", async ({ page }) => {
		await setupPage(page, "/en/portfolio", "en-portfolio-page.png");
	});
});

test.describe("FR - Visual regression testing", () => {
	test("home page", async ({ page }) => {
		await setupPage(page, "/fr", "fr-home-page.png");
	});

	test("about page", async ({ page }) => {
		await setupPage(page, "/fr/about", "fr-about-page.png");
	});

	test("portfolio page", async ({ page }) => {
		await setupPage(page, "/fr/portfolio", "fr-portfolio-page.png");
	});
});
