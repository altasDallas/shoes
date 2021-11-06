import { Given, When, Then } from '@wdio/cucumber-framework'

import monthsPage from '../pageobjects/emailbox.page'

When(/^I click (.*?) month$/, async (month) => {
  await browser.$("//a[contains(text(),'"+month+"')]").click();
})

