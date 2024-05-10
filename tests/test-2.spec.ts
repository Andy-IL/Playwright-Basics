import { test, expect } from '@playwright/test';

const string1 = "Item 1 substitution" ;
const string2 = "Item TWO substitution" ;

test.only('test', async ({ page }) => {
  await page.goto('https://example.cypress.io/todo');
  await page.getByText('Pay electric bill').click();
  await page.getByText('Walk the dog').click();
  await page.locator('[data-test="new-todo"]').click();
  await page.locator('[data-test="new-todo"]').fill(string1);
  await page.locator('[data-test="new-todo"]').press('Enter');
  await page.locator('[data-test="new-todo"]').click();
  await page.locator('[data-test="new-todo"]').fill(string2);
  await page.locator('[data-test="new-todo"]').press('Enter');
  await page.locator('li').filter({ hasText: 'Pay electric bill' }).getByRole('checkbox').check();
  await page.locator('li').filter({ hasText: 'Walk the dog' }).getByRole('checkbox').check();
  await page.locator('li').filter({ hasText: 'Walk the dog' }).getByRole('checkbox').uncheck();
  await page.locator('li').filter({ hasText: 'Walk the dog' }).getByRole('checkbox').check();
  await page.locator('li').filter({ hasText: string1 }).getByRole('checkbox').check();
   await page.locator('li').filter({ hasText: string1 }).getByRole('checkbox').uncheck();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'All' }).click();
});
