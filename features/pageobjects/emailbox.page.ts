import Page from './months.page';


/**
 * sub page containing specific selectors and methods for a specific page
 */
class EmailPage {
  
    get emailInput () { return $('#remind_email_input') }
    get submit () { return $('#remind_email_submit') }
    get error () { return $('//div[@class="flash alert_danger"]') }
    


    
    
}

export default new EmailPage();
