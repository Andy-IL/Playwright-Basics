import { test, expect, Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
   // test.beforeAll(async ({ page }) => {
    await page.goto('https://example.cypress.io/todo');

}) ;

const TODO_ITEMS = [
    'Refit bedroom\n', 
    'Visit Doctor',
    'Lunch'
] ; 

test.describe('new ToDo', () => {

    test('open todomvc page', async ({ page }) => {
        await page.goto('https://example.cypress.io/todo');
    });

    test('add todo item 1', async ({ page }) => {
        // create 1st todo. 
        await page.locator('.new-todo').fill(TODO_ITEMS[0]);
        await page.locator('.new-todo').press('Enter');
//        await expect(page.getByTestId('todo-title')).toHaveText([TODO_ITEMS[0]]);
        await expect(page.getByText(TODO_ITEMS[0])).toHaveText([TODO_ITEMS[0]]);


//         await expect(page.locator('view label')).toHaveText([TODO_ITEMS[0]]) ; // fails to find element
   

    }) ;

    test('add todo item 2', async ({ page }) => {
        // create 2nd todo. 
        await page.locator('.new-todo').fill(TODO_ITEMS[1]);
        await page.locator('.new-todo').press('Enter');

//        await expect(page.getByTestId('todo-title')).toHaveText([TODO_ITEMS[1]]);
        await expect(page.getByText(TODO_ITEMS[1])).toHaveText([TODO_ITEMS[1]]);
        

    }) ;

    test('add todo item 3', async ({ page }) => {
        // create 1st todo. 
        await page.locator('.new-todo').fill(TODO_ITEMS[2]);
        await page.locator('.new-todo').press('Enter');

        await expect(page.getByText(TODO_ITEMS[2])).toHaveText([TODO_ITEMS[2]]);


    }) ;


}); 
test.afterEach (async ({ page }) => {
    await page.close();

}) ;
