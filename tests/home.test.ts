import test, { expect } from "@playwright/test";

test("Home page animation test", async ({ page }) => {
  await page.goto("/");

  const riseAboveText = page.getByText(/RISE ABOVE/i);
  const noiseSpanText = page.getByText(/NOISE/i);
  const designText = page.getByText(/design/i);
  const creativeText = page.getByText(/creative/i);

  // Expect the slogan, 'RISE ABOVE THE NOISE' to be visible at first
  await expect(riseAboveText).toBeVisible();
  await expect(noiseSpanText).toBeVisible();
  // Expect the design and creative portals to not be visible
  await expect(designText).not.toBeVisible();
  await expect(creativeText).not.toBeVisible();

  await page.waitForTimeout(8000);
  // Expect the slogan to not be visible due to the animation transition
  await expect(riseAboveText).not.toBeVisible();
  await expect(noiseSpanText).not.toBeVisible();
  // Expect the design and creative portals to be visible
  await expect(designText).toBeVisible();
  await expect(creativeText).toBeVisible();
});
