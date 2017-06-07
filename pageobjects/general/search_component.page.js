// search_component.page.js
var Page = require('../page');
const msTimeout = 30000;

var SearchPage = Object.create(Page, {      
    /**
     * define elements
     */
     
    searchTerm: { get: function () { return browser.element('#searchTerm'); } },
    searchButton: { get: function () { return browser.element('#discover-search'); } }, 

    /**
     * define or overwrite page methods
     */
    
    search: { value: function(term) {   
           
        this.searchTerm.waitForVisible(msTimeout);
        this.searchTerm.setValue(term);    
        this.searchButton.waitForVisible(msTimeout);
        this.searchButton.click(); 

        browser.waitForText('='+term,msTimeout);
        /*
        var href = browser.getAttribute('='+term, 'href');
        
        console.log('original href: '+href);
        if( typeof href !== 'string' )
            href = href[href.length-1];

        href = href.substring(25);      //SUBSTRING IS TOTALLY DEPENDING OF THE PUBLIC DOMAIN
        Page.open.call(this, href);

        console.log('Substring href: '+ href);*/

        browser.click('='+term);

    } },

    /*
    waitPost: { value: function(post) {                    
        
        
        browser.waitUntil(function() {
            
            browser.waitForText('p='+post,msTimeout);
            return true;

        },msTimeout,'expected post created after msTimeout');
             
    } }, */
          

});
module.exports = SearchPage