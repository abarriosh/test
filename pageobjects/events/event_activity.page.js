// event_activity.js
var Page = require('../page');
var PostPage = require('../pageobjects/general/post_component.page');

const msTimeout = 30000;

var EventActivityPage = Object.create(Page, {
    /**
     * define elements
     */
       

    /**
     * define or overwrite page methods
     */
    createPost: { value: function(post) {
        
        PostPage.setPost(post);
        PostpPage.submit();
               
    } }
             

});
module.exports = EventActivityPage