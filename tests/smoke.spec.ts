import { test, expect } from "@playwright/test";

test.describe("Smoke Tests", () => {
  test("Home page loads successfully", async ({ page }) => {
    await page.goto("/");
    // Check for the main heading which is dynamically loaded from Sanity
    await expect(page.locator("h1")).toBeVisible();
    // Check for social links container
    await expect(page.locator("a[href*='github.com']")).toBeVisible();
  });

  test("About page loads successfully", async ({ page }) => {
    await page.goto("/about");
    await expect(page).toHaveTitle(/About/);
    // Check for the heading
    await expect(page.locator("h1")).toBeVisible();
    // Check for skills section
    await expect(page.getByText("To build beautiful software, I use these technologies.")).toBeVisible();
  });

  test("Blog index loads successfully", async ({ page }) => {
    await page.goto("/blog");
    await expect(page).toHaveTitle(/Writing/);
    await expect(page.locator("h1")).toHaveText("Writing");

    // Check if at least one blog post is displayed (BlogCard renders an <article>)
    const posts = page.locator("article");
    await expect(posts.first()).toBeVisible();
  });

  test("Single blog post navigates and loads", async ({ page }) => {
    await page.goto("/blog");

    // Find the first blog post link (the overlay link in BlogCard)
    const firstPostLink = page.locator("article a").first();
    await expect(firstPostLink).toBeVisible();

    // Get the href to verify navigation
    const href = await firstPostLink.getAttribute("href");
    expect(href).toBeTruthy();

    // Click and wait for navigation
    await firstPostLink.click();
    await page.waitForURL(`**${href}`);

    // Verify post content loads
    await expect(page.locator("h1")).toBeVisible();
    // Verify body content exists (PortableText usually renders paragraphs)
    // We expect at least some paragraph content in a blog post
    await expect(page.locator("p").first()).toBeVisible();
  });

  test("Sanity Studio loads", async ({ page }) => {
    await page.goto("/studio");
    // Sanity Studio is a Single Page App, so we wait for the title to be set
    await expect(page).toHaveTitle(/Stanislav Holub Portfolio/);
  });
});
