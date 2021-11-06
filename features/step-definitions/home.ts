import { Given, When, Then } from '@wdio/cucumber-framework'

import homePage from '../pageobjects/home.page'

Given(/^I am on the home page of shoe store that is "(.*?)"$/, async (page) => {
  await homePage.open(page)
})

Then(/^I see website home page$/, async () => {
  await expect(homePage.welcome).toBeExisting()
})

Then(
  /^I see all months from January to December as options on the top$/,
  async () => {
    for (let i = 0; i < (await homePage.theMonths.length); i++) {
      await expect(await homePage.allMonthsLinks[i].getText()).toEqual(
        homePage.theMonths[i],
      )
    }
  },
)
Then(/^I see “(.*?)” as another option on the top$/, async (all) => {
  await expect(await homePage.allMonthsLinks[12].getText()).toEqual(all)
})
Then(/^I see (.*?) is visible$/, async (box: string) => {
  if (box.includes('email')) {
    await expect(await homePage.emailBox).toExist()
  } else if (box.includes('search')) {
    await expect(await homePage.searchBox).toExist()
  } else if (box.includes('promotion')) {
    await expect(await homePage.promBox).toExist()
  } else {
    await expect('No box like ' + box).toThrowError('No box like ' + box)
  }
})
Then(/^I click (.*?) tab$/, async (month) => {
    var xpath:string = "//a[contains(text(),'"+month+"')]";
    await browser.$(xpath).click();
})
Then(/^I click Home tab on the left top$/, async () => {
    await homePage.homeDirect.click()
})
