import { Given, When, Then } from '@wdio/cucumber-framework'

import promPage from '../pageobjects/promotionbox.page'

When(/^I enter (.*?) as a Promotional Code$/, async (prom: string) => {
  await promPage.promInput.setValue(prom)
})

When(/^I submit Promotional Code$/, async () => {
  await promPage.submit.click()
})
