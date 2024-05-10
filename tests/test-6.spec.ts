import { test, expect } from '@playwright/test';

test.describe('Test Suite', () => {

  test.beforeEach (async ({ page }) => {
    await page.goto('https://playwright.dev');
  
  }) ;
 
  test('open playwright page', async ({ page }) => {
    await page.goto('https://playwright.dev/');
});

test('StartPages', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('link', { name: 'How to run the example test' }).click();
}) ;
test('Running Tests', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/intro#running-the-example-test');
  await page.getByRole('link', { name: 'Running Tests' }).click();
  await page.getByRole('link', { name: 'How to run tests from the' }).click();
  await page.locator('p').filter({ hasText: 'We highly recommend running' }).getByRole('link').click();
  await page.getByText('UI Mode let\'s you explore,').click({
    button: 'right'
  });
});

test('UI&Canary', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/test-ui-mode') ;
  await page.getByText('UI Mode let\'s you explore,').click();
  await page.getByRole('link', { name: 'Canary releases' }).click();
  await expect(page.getByRole('article')).toContainText('Playwright for Node.js has a canary releases system.');
}) ;

});