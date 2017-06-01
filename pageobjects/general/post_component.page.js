// post_component.page.js
var Page = require('../page');
const msTimeout = 30000;

var PostPage = Object.create(Page, {      
    /**
     * define elements
     */
     
    post: { get: function () { return browser.element('#body'); } },
    postButton: { get: function () { return browser.element('#js-submit'); } },

    /**
     * define or overwrite page methods
     */
    
    setPost: { value: function(post) {   
           
        this.post.waitForVisible(msTimeout);
        this.post.setValue(post);       
    } },


    submit: { value: function() {   
           
        this.postButton.waitForVisible(msTimeout);
        this.postButton.click();       
    } },

    waitPost: { value: function(post) {                    
        
        
        browser.waitUntil(function() {
            
            browser.waitForText('p='+post,msTimeout);
            return true;

        },msTimeout,'expected post created after msTimeout');
             
    } }, 
          

});
module.exports = PostPage