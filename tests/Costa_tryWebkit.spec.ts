import {test, firefox, webkit, chromium} from '@playwright/test';

test('test', async ( ) => {
  // Make sure to run headed.
  const browser = await webkit.launch({ headless: false });

  // Setup context however you like.
  const context = await browser.newContext({ /* pass any options */ });
//    await context.route('**/*', route => route.continue());

  // Pause the page, and start recording manually.
  const page = await context.newPage();
//   await page.pause();


// (async () => {
//   const browser = await firefox.launch({
//     headless: false
//   });
//   const context = await browser.newContext();
  await page.goto('https://www.costa.co.uk/');
  await page.getByRole('button', { name: 'Accept All Cookies' }).click();
  await page.getByLabel('Account Menu').click();
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('ail_shop@hotmail.com');
  await page.getByPlaceholder('Email').press('Tab');
  await page.getByPlaceholder('Enter password here').click();
  await page.getByPlaceholder('Enter password here').fill('M4rj0rie_L!');
  await page.locator('section').filter({ hasText: 'PasswordNo account? Create one' }).getByRole('button').click();
  await page.getByText('Enter email herePasswordNo').click();
  await page.getByRole('button', { name: 'Submit' }).click();
// A dialogue asking for a rating may pop up
//<div class="_hj-c8PC+__styles__surveyBody"><div aria-live="off" class="_hj-S9XKO__styles__surveyTitle   " id="hj-survey-lbl-1" 
//  aria-label="Hi! Could you spare a moment for us? Using a 1 to 5 scale, how would you rate your website experience today? Share your thoughts: 
//  Select an option from 1 to 5, with 1 being Poor and 5 being Great">Hi! Could you spare a moment for us? Using a 1 to 5 scale, how would you rate your website experience today? Share your thoughts:</div>
//  <div class="_hj-E2-N0__styles__surveyAnswers"><div aria-labelledby="hj-survey-lbl-1" 
//  class="_hj-PtDNs__styles__scaleAnswerWrapper _hj-hTm4+__styles__answersContentWrapper _hj-RNNXZ__styles__embedded" role="radiogroup">
//  <div class="_hj-I5foH__styles__scaleOptionsList  _hj-PuPNy__styles__ratingScale5"><label class="_hj-CvVSY__styles__scaleOption  _hj-JK76X__styles__light " style="color: rgb(17, 17, 17) !important;">
//  <input aria-describedby="hj-surveys-scale-option-label-0-68e68ed5-5e8d-4425-be49-217c2f65e5af" type="radio" aria-label="1" name="f0dc52ad-d22e-45ec-8dda-e75a4d142146" value="1">
//  <span aria-hidden="true">1</span></label><label class="_hj-CvVSY__styles__scaleOption  _hj-JK76X__styles__light " style="color: rgb(17, 17, 17) !important;"><input type="radio" aria-label="2" name="f0dc52ad-d22e-45ec-8dda-e75a4d142146" value="2"><span aria-hidden="true">2</span></label><label class="_hj-CvVSY__styles__scaleOption  _hj-JK76X__styles__light " style="color: rgb(17, 17, 17) !important;"><input type="radio" aria-label="3" name="f0dc52ad-d22e-45ec-8dda-e75a4d142146" value="3"><span aria-hidden="true">3</span></label><label class="_hj-CvVSY__styles__scaleOption  _hj-JK76X__styles__light " style="color: rgb(17, 17, 17) !important;"><input type="radio" aria-label="4" name="f0dc52ad-d22e-45ec-8dda-e75a4d142146" value="4"><span aria-hidden="true">4</span></label><label class="_hj-CvVSY__styles__scaleOption  _hj-JK76X__styles__light " style="color: rgb(17, 17, 17) !important;"><input aria-describedby="hj-surveys-scale-option-label-1-8e53d8f7-a06f-4f59-bf5c-3c3656ce6ab1" type="radio" aria-label="5" name="f0dc52ad-d22e-45ec-8dda-e75a4d142146" value="5"><span aria-hidden="true">5</span></label></div><div class="_hj-ILZpN__styles__scaleLabels"><span class="_hj-+enB3__styles__scaleLabel _hj-JK76X__styles__light" id="hj-surveys-scale-option-label-0-68e68ed5-5e8d-4425-be49-217c2f65e5af">Poor</span><span class="_hj-+enB3__styles__scaleLabel _hj-JK76X__styles__light" id="hj-surveys-scale-option-label-1-8e53d8f7-a06f-4f59-bf5c-3c3656ce6ab1">Great</span>
//  </div></div></div></div>
// The close X is <button aria-label="Close" class="_hj-x7hBM__styles__closeModalBtn" 
// style="color: rgb(102, 102, 102) !important;"><i class="_hj-dk3Fb__styles__iconX _hj-L5SMl__styles__icon"></i></button>

  // this is the expected working path
  await page.getByLabel('Account Menu').click();
  await page.getByRole('link', { name: 'My account' }).click();
  await page.getByRole('button', { name: 'details Details' }).click();
  await page.getByPlaceholder('Last name').click();
  await page.getByLabel('Account Menu').click();
  await page.getByRole('link', { name: 'Log out' }).click();
  await page.getByRole('heading', { name: 'Login' }).click();

  // ---------------------
  await context.close();
  await browser.close();
});