// discover_task.js
var Page = require('../page');
var GlobalSearchPage = require('../general/globalsearch_topbar_component.page');
//var PostPage = require('../pageobjects/general/post_component.page');

const msTimeout = 30000;

var DiscoverTaskPage = Object.create(Page, {
    /**
     * define elements
     */
      title: { get: function () { return browser.element('discover-task'); } },  

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        
        GlobalSearchPage.waitForGlobalSearch(); //Using Global Searh Component to indicate logged in ...
        Page.open.call(this, 'tasks/discover');
        
    } },
             
    isPageDisplayed: { value: function() {
        this.title.waitForEnabled(msTimeout);
        return true;
   
    } },


});
module.exports = DiscoverTaskPage