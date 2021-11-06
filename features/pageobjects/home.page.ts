import Page from './months.page';


/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage {
  
    get welcome () { return $('//h2[contains(text(),"Welcome")]') }
    get allMonthsLinks () { return $$('//ul/li/a') }
    get emailBox () { return $('#remind_email_input') }
    get promBox () { return $('#promo_code_input') }
    get searchBox () { return $('#promo_code_input') }
    get homeDirect () { return $('//a[contains(text(),"Home")]') }


    
    open (url:string) {
        return browser.url(url);
    }
    
    theMonths:any = ["January", "February", "March", "April", "May","June", "July",
     "August", "September", "October", "November", "December"];
}

export default new HomePage();
