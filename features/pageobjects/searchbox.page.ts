import Page from './months.page';


/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage {
  
    get searchButton () { return $('#search_button') }
    get selectBrand () { return $('#brand') }
    get list () { return $$('//ul[@id="shoe_list"]/li') }
    


    
    
}

export default new SearchPage();
