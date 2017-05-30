// globalsearch_topbar_component.page.js
var Page = require('../page');
const msTimeout = 30000;

var GlobalSearchPage = Object.create(Page, {      
    /**
     * define elements
     */
     
    globalSearch: { get: function () { return browser.element('[name="term"]'); } },

    /**
     * define or overwrite page methods
     */
     
    search: { value: function(criteria,access) {   
           
        
        this.globalSearch.waitForVisible(msTimeout);
        this.globalSearch.setValue(criteria);
        //this.globalSearch.submitForm();         
        
        browser.waitForText('='+criteria,msTimeout);
        var href = browser.getAttribute('='+criteria, 'href');
        
        var caps = browser.session();
        if (caps.value.browserName !== 'phantomjs')  //REAL BROWSER CREATES AN ARRAY ON HREF ATTRIBUTE
            href = href[1];    
        
        href = href.substring(42);
        console.log(href);

        if (access === 'public')
            Page.open.call(this, href);
        else
            Page.openPrivate.call(this,href);
        
    } }, 

    waitForGlobalSearch: { value: function(criteria) {   
           
        this.globalSearch.waitForVisible(msTimeout);
               
    } }   
          

});
module.exports = GlobalSearchPage