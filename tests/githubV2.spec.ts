import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://github.com/');
  await page.getByRole('link', { name: 'Sign up', exact: true }).click({
    button: 'right'
  });
  await expect(page.getByRole('button', { name: 'Search or jump to...' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Sign up', exact: true })).toBeVisible();
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByLabel('Username or email address').click();
  await page.getByLabel('Username or email address').fill('andy.layton@selfridges.co.uk');
  await page.getByLabel('Password').fill('Ch4ndrasekhar!');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByRole('button', { name: 'Send SMS' }).click();
  // SMS code verification here
  await page.pause() ;
  // await page.getByRole('button', { name: 'Verify' }).click(); // successful 2FA logs straight in
  await expect(page.getByLabel('Account', { exact: true }).getByRole('button')).toContainText('AILayton');
  await page.getByLabel('Account menu', { exact: true }).getByLabel('Close').click();
  await page.getByRole('link', { name: 'Sign out' }).click();
  await page.getByRole('button', { name: 'Sign out', exact: true }).click();
});