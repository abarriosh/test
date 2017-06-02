// share_component.page.js
var Page = require('../page');
const msTimeout = 30000;

var SharePage = Object.create(Page, {      
    /**
     * define elements
     */
     
    sharePost: { get: function () { return browser.element('#body'); } },
    sharePostButton: { get: function () { return browser.element('#js-submit'); } },

    /**
     * define or overwrite page methods
     */
    
    setSharePost: { value: function(sharePost) {   
           
        this.sharePost.waitForVisible(msTimeout);
        this.sharePost.setValue(sharePost);       
    } },


    submit: { value: function() {   
           
        this.sharePostButton.waitForVisible(msTimeout);
        this.sharePostButton.click();       
    } },

    waitSharePost: { value: function(sharePost) {                    
        
        
        browser.waitUntil(function() {
            
            browser.waitForText('p='+sharePost,msTimeout);
            return true;

        },msTimeout,'expected post created after msTimeout');
             
    } } 
          

});
module.exports = SharePage