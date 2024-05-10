import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://playwright.dev/docs/codegen#recording-a-test');

}) ;

// test('Open page Record a test', async ({ page }) => {
//   await page.goto('https://playwright.dev/docs/codegen#recording-a-test');
// });


test('checktext Record at Cursor', async ({ page })  => {
  await expect(page.getByRole('main')).toContainText('Record at cursor');
}) ;

test('Click Record at Cursor', async ({ page })  => {
  await page.getByRole('link', { name: 'Record at Cursor', exact: true }).click();

} ) ;

test('Click Running CodeGen', async ({ page })  => {
  await page.getByRole('link', { name: 'Running Codegen', exact: true }).click();
});

test('Trace Viewer', async ({ page })  => {
  await page.getByRole('link', { name: 'Trace viewer' }).first().click();
  await page.getByRole('link', { name: 'How to record a trace' }).click();
});
test('Canary & latest Releases', async ({ page })  => {
  await page.getByRole('link', { name: 'Canary releases' }).click();
  await page.getByText('latest: stable releases').click();
  await page.getByText('latest: stable releases').click({
    button: 'right'
    });
    await expect(page.getByRole('article')).toContainText('latest: stable releases');    
  });

  test('Installation', async ({ page })  => {
  await page.getByRole('link', { name: 'Installation' }).click();
  await page.getByRole('link', { name: 'How to install Playwright' }).click();
  await page.getByRole('tab', { name: 'yarn' }).click();
  await page.getByRole('tab', { name: 'pnpm' }).click();
  await page.getByText('Install Playwright browsers (').click();
  await page.getByRole('link', { name: 'System requirements', exact: true }).click();
  await page.getByRole('link', { name: 'CI GitHub Actions' }).click();
  await page.getByRole('link', { name: 'doc on Continuous Integration' }).click();
}) ;