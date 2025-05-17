import { test, expect, page } from '@playwright/test';

test('Successful registration', async ({ page }) => {
  // Go to the app
  await page.goto('https://auth-home-task.vercel.app/');

  // Navigate to registration form
  await page.getByRole('button', { name: 'Go to Registration' }).click();

  // Fill out form fields with valid data
  await page.locator('input[name="username"]').fill('testuser');
  await page.locator('input[name="email"]').fill('testuser@test.com');
  await page.locator('input[name="password"]').fill('Password1');
  await page.locator('input[name="confirmPassword"]').fill('Password1');

  // Click Register
  await page.getByRole('button', { name: 'Register' }).click();

  // Assert success message
  await expect(page.locator('text=You have registered successfully!')).toBeVisible();

  // Optional: Assert redirection to Home Page
  await expect(page).toHaveURL(/.*home/i);
});
