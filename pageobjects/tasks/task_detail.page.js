// task_detail.page.js
var Page = require('../page');
var PostPage = require('../general/post_component.page');

const msTimeout = 30000;

var TaskDetailPage = Object.create(Page, {
    /**
     * define elements
     */
       

    /**
     * define or overwrite page methods
     */
    createPost: { value: function(post) {
        
        PostPage.setPost(post);
        PostPage.submit();
               
    } },

     waitForPost: { value: function(post) {

        PostPage.waitPost(post);
        
               
    } }
             

});
module.exports = TaskDetailPage