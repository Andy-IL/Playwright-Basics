// Conventional test file 
//  Test 1 open BBC fixtures at 2024-04-19 and check women's teams playing

import { test, expect } from '@playwright/test';
import { chromium, Browser, Page } from 'playwright';

let page: Page
let browser:Browser
const firstDate = "2024-03-19"

test('test01', async ({ page }) => {

await page.goto('https://www.bbc.co.uk/sport/football/scores-fixtures');
await page.getByRole('button', { name: 'Yes, I agree' }).click();
await page.getByRole('heading', { name: 'Premier League' }).click();
await page.getByRole('link', { name: 'Partick Thistle versus' }).click();
await page.getByTestId('datepicker-date-link-2024-05-09')
});

test('test02', async ({ page }) => {

  await page.goto('https://www.bbc.co.uk/sport/football/scores-fixtures/' +firstDate);
  let womensTeamsFound = (await page.getByText("Women\'s").count()).valueOf() ;
    console.log("Deducing this many women's matches: '" + womensTeamsFound  + "'") ;
    expect(womensTeamsFound >= 1).toBeTruthy() ;
});
