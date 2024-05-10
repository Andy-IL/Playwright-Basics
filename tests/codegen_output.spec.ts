import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.costa.co.uk/');
  await page.getByRole('button', { name: 'Accept All Cookies' }).click();
  await page.getByLabel('Account Menu').click();
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('ail_shop@hotmail.com');
  await page.getByPlaceholder('Email').press('Tab');
  await page.getByPlaceholder('Enter password here').fill('M4rj0rie_L!');
  await page.locator('section').filter({ hasText: 'PasswordNo account? Create one' }).getByRole('button').click();
  await page.getByRole('button', { name: 'Submit' }).click();

  // if popup appears with a Close then login has failed 
    // await page.getByRole('button', { name: 'Close' }).click();
// code to register 
//   await page.locator('section').filter({ hasText: 'PasswordNo account? Create one' }).getByRole('button').click();
//   await page.getByRole('link', { name: 'Create one' }).click();
//   await page.getByRole('button', { name: 'Yes' }).click();
//   await page.locator('#cardnumberinput').click();
//   await page.locator('#cardnumberinput').fill('1234567890');
//   await page.getByRole('button', { name: 'Continue' }).click();
//   await page.getByText('Hmm… are you sure that’s the').click();
// Confirm on login 
// await page.pause() ;
await page.getByLabel('Account Menu').click();
await page.getByRole('link', { name: 'My account' }).click();
await page.getByRole('button', { name: 'details Details' }).click();
await page.getByPlaceholder('Last name').click();
await page.getByLabel('Account Menu').click();
await page.getByRole('link', { name: 'Log out' }).click();
await page.getByRole('heading', { name: 'Login' }).click();


});