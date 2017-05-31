// discover_company.js
var Page = require('../page');
var GlobalSearchPage = require('../general/globalsearch_topbar_component.page');
//var PostPage = require('../pageobjects/general/post_component.page');

const msTimeout = 30000;

var DiscoverCompanyPage = Object.create(Page, {
    /**
     * define elements
     */
      title: { get: function () { return browser.element('/html/body/div[1]/div/div/div/div[3]/div/div/div/div[1]/div/div/div[1]/h2'); } },  

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        
        GlobalSearchPage.waitForGlobalSearch(); //Using Global Searh Component to indicate logged in ...
        Page.open.call(this, 'companies/discover');
        
    } },
             
    isPageDisplayed: { value: function() {
        this.title.waitForEnabled(msTimeout);
        return true;
   
    } },


});
module.exports = DiscoverCompanyPage