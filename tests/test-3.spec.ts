import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.costa.co.uk/');
  await page.getByRole('button', { name: 'Accept All Cookies' }).click();
  await page.getByLabel('Costa Coffee logo').click();
  // const page1Promise = page.waitForEvent('popup');
  // await page.getByRole('navigation').getByRole('link', { name: 'Gift cards' }).click();
  // const page1 = await page1Promise;
  // await page1.getByRole('button', { name: 'I accept' }).click();
  // await page1.locator('#navbarSupportedContent').getByRole('link', { name: 'Top up' }).click();
  // await page1.getByLabel('Gift card number *').click();
  // await page1.getByLabel('Gift card number *').fill('1234567890');
  // await page1.locator('#MainContent_Content1_ctl02_btnBalanceCheck').click();
  // await page1.getByRole('link', { name: 'Basket Icon' }).click();
  // await page1.locator('#navbarSupportedContent').getByRole('link', { name: 'Home' }).click();
  // await page1.getByRole('link', { name: 'Costa', exact: true }).click();
  await page.getByLabel('Costa Coffee logo').click();
  await page.getByRole('link', { name: 'Join Costa Club' }).click();
  await page.getByRole('link', { name: 'Join Costa Club' }).click();
  await page.getByRole('link', { name: 'Join Costa Club' }).click();
  await page.getByRole('link', { name: 'Join the Costa Club' }).click();
  await page.getByRole('button', { name: 'No' }).click();
  await page.getByLabel('Costa Coffee logo').click();
});