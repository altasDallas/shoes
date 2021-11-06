import Page from './months.page';


/**
 * sub page containing specific selectors and methods for a specific page
 */
class PromPage {
  
    get promInput () { return $('#promo_code_input') }
    get submit () { return $('#promo_code_submit') }
    get error () { return $('//div[@class="flash alert_danger"]') }
    


    
    
}

export default new PromPage();
