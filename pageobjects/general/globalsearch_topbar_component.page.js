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
        
        
        browser.waitForText('='+criteria,msTimeout);
        var href = browser.getAttribute('='+criteria, 'href');
        
        var caps = browser.session();
        if (caps.value.browserName !== 'phantomjs')  //REAL BROWSER CREATES AN ARRAY ON HREF ATTRIBUTE. WE NEED TO SEARCH THE LAST ELEMENT OF THE ARRAY
            href = href[href.length-1];    
        
        
        console.log('href without substring: '+href);
        
        if (access === 'public'){
            href = href.substring(35);      //SUBSTRING IS TOTALLY DEPENDING OF THE PUBLIC DOMAIN
            Page.open.call(this, href);
        }else{
            href = href.substring(42);      //SUBSTRING IS TOTALLY DEPENDING OF THE PRIVATE DOMAINE
            Page.openPrivate.call(this,href);
        }

        console.log(href);
        
    } }, 

    waitForGlobalSearch: { value: function(criteria) {   
           
        this.globalSearch.waitForVisible(msTimeout);
               
    } }   
          

});
module.exports = GlobalSearchPage