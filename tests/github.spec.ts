import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://github.com/');
  await expect(page.getByRole('button', { name: 'Product' })).toBeVisible();
  await expect(page.getByRole('banner')).toContainText('Sign up');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByLabel('Username or email address').click();
  await page.getByLabel('Username or email address').fill('alayton@planittesting.com');
  await page.getByLabel('Username or email address').press('Tab');
  await page.getByLabel('Password').fill('Mejalobu23!');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByText('Incorrect username or').click();
});