import { Given, When, Then } from '@wdio/cucumber-framework'

import emailPage from '../pageobjects/emailbox.page'

When(/^I put (.*?) as email$/, async (email) => {
  await emailPage.emailInput.setValue(email)
})
Then(/^I submit email address$/, async () => {
  await emailPage.submit.click()
})
Then(/^I see error as (.*?)$/, async (err:string) => {
  await expect(await emailPage.error.getText()).toEqual(err)
})
