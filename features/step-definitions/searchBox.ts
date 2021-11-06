import { Given, When, Then } from '@wdio/cucumber-framework'

import homePage from '../pageobjects/home.page'
import searchPage from '../pageobjects/searchbox.page'


When(/^I select (.*?) brand$/, async (select) => {
  await searchPage.selectBrand.selectByVisibleText(select);
})
Then(/^I click Search button$/, async () => {
  await searchPage.searchButton.click();
})
Then(/^I see there is no shoe$/, async () => {
  await expect(await searchPage.list).not.toBeExisting();
})
Then(/^I see there is (.*?) shoes$/, async (shoes) => {
  await expect(await searchPage.list.length+"").toEqual(shoes)
})
