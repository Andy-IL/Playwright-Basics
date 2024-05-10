import { test, expect } from '@playwright/test';

test.describe('Sequential Test Suite', () => {

    let page: Page; 
    test.beforeAll (async ({ browser }) => {
        page = await browser.newPage();
  
  }) ;
 

test('010: StartPages', async () => {  // do not pass page
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('link', { name: 'How to run the example test' }).click();
}) ;
test('020: Running Tests', async () => {
//   await page.goto('https://playwright.dev/docs/intro#running-the-example-test');
  await page.getByRole('link', { name: 'Running Tests' }).click();
  await page.getByRole('link', { name: 'How to run tests from the' }).click();
  await page.locator('p').filter({ hasText: 'We highly recommend running' }).getByRole('link').click();
  await page.getByText('UI Mode let\'s you explore,');
});

test('030: UI&Canary', async () => {
//  await page.goto('https://playwright.dev/docs/test-ui-mode') ;
  await page.getByText('UI Mode let\'s you explore,').click();
  await page.getByRole('link', { name: 'Canary releases' }).click();
  await expect(page.getByRole('article')).toContainText('Playwright for Node.js has a canary releases system.');
}) ;

test('040: Test Configuration', async () => {
     await page.getByRole('link', { name: 'Next Test configuration »' }).click();
     
     await page.getByText('Playwright has many options');
    }) ;
    
});