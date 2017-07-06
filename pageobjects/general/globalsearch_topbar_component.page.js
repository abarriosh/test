// globalsearch_topbar_component.page.js
var Page = require('../page');
const msTimeout = 30000;

var GlobalSearchPage = Object.create(Page, {      
    /**
     * define elements
     */
     
    globalSearch: { get: function () { return browser.element('[name="term"]'); } },
    showAllResultsBox: { get: function () { return browser.element('/html/body/div[1]/div/div/div/div[4]/div/div/div/div/div/div[1]'); } },
    showAllResultsOption: { get: function () { return browser.element('#js-showResults'); } },   

    /**
     * define or overwrite page methods
     */
     
    search: { value: function(criteria,access) {   
           
        this.globalSearch.waitForVisible(msTimeout);
        this.globalSearch.setValue(criteria);
        
        browser.waitForText('='+criteria,msTimeout);
        var href = browser.getAttribute('='+criteria, 'href');
        
        console.log('original href: '+href);
        if( typeof href !== 'string' )
            href = href[href.length-1];

        if (access === 'public'){
            href = href.substring(35);      //SUBSTRING IS TOTALLY DEPENDING OF THE PUBLIC DOMAIN
            Page.open.call(this, href);
        }else{
            href = href.substring(42);      //SUBSTRING IS TOTALLY DEPENDING OF THE PRIVATE DOMAINE
            Page.openPrivate.call(this,href);
        }

        console.log('Substring href: '+ href);
        
    } }, 

    waitForGlobalSearch: { value: function(criteria) {   
           
        this.globalSearch.waitForVisible(msTimeout);
               
    } },  

    isShowAllResultsDisplayed: { value: function(criteria) {   
         
        this.globalSearch.waitForVisible(msTimeout);
        this.globalSearch.setValue(criteria);  
        this.showAllResultsOption.waitForVisible(msTimeout);
        this.showAllResultsOption.click();

        this.showAllResultsBox.waitForVisible(msTimeout);
        return true;
               
    } }  
          

});
module.exports = GlobalSearchPage