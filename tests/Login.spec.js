import { test, expect } from "@playwright/test";

test("Login Page - Verify heading, email, sign-in button", async ({ page }) => {
    await page.goto("https://eventhub.rahulshettyacademy.com");
    await expect(page.getByRole("heading", { name: "Sign in to EventHub" })).toBeVisible();
    await expect(page.getByPlaceholder("you@email.com")).toBeVisible();
    await expect(page.getByRole("button", { name: "Sign In" })).toBeVisible();
})

test("Login Page - Verify password, url, heading", async ({ page }) => {

    await page.goto("https://eventhub.rahulshettyacademy.com");
    await expect(page.getByLabel("Password")).toBeVisible();
    await expect(page).toHaveURL("https://eventhub.rahulshettyacademy.com/login");
    await expect(page.getByRole("heading", { name: "Sign in to EventHub" })).toBeVisible();
})