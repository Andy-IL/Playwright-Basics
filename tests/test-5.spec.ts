
import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
  await page.goto('https://www.costa.co.uk/');
  await page.getByRole('button', { name: 'Accept All Cookies' }).click();
  await page.getByLabel('Account Menu').click();
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('ail_shop@hotmail.com');
  await page.getByPlaceholder('Email').press('Tab');
  await page.getByPlaceholder('Enter password here').fill('badpassword');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('heading', { name: 'An error has occurred!' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByPlaceholder('Enter password here').dblclick();
  await page.locator('section').filter({ hasText: 'PasswordNo account? Create one' }).getByRole('button').click();
  await page.getByPlaceholder('Enter password here').click();
  await page.getByPlaceholder('Enter password here').fill('M4rj0rie_L!');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('heading', { name: 'An error has occurred!' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByPlaceholder('Enter password here').click();
});