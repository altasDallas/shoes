

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MonthsPage {
    /**
     * define selectors using getter methods
     */
    get flashAlert () { return $('#flash') }
}

export default new MonthsPage();
