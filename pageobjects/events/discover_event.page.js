// discover_event.page.js
var Page = require('../page');
var GlobalSearchPage = require('../general/globalsearch_topbar_component.page');

const msTimeout = 30000;

var DiscoverEventPage = Object.create(Page, {
    /**
     * define elements
     */
    
    /*
    upcomingLink: { get: function () { return browser.element('/html/body/div[1]/div/div/div/div[4]/div/div/div/div[1]/div/div/div[1]/div/div[2]/a[1]'); } },
    pastLink: { get: function () { return browser.element('/html/body/div[1]/div/div/div/div[4]/div/div/div/div[1]/div/div/div[1]/div/div[2]/a[2]'); } },
    firstBoxEvent: { get: function () { return browser.element('/html/body/div[1]/div/div/div/div[4]/div/div/div/div[1]/div/div/div[2]/div/div[1]/div'); } }, //First box Event DIV Container
    */       
    upcomingLink: { get: function () { return browser.element('discover-upcoming-link'); } },
    pastLink: { get: function () { return browser.element('discover-past-link'); } },
    firstBoxEvent: { get: function () { return browser.element('#box-event'); } }, //First box Event DIV Container
    

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        
        GlobalSearchPage.waitForGlobalSearch(); //Using Global Searh Component to indicate logged in ...
        Page.open.call(this, 'events/discover');
               
    } },


    isFirstBoxEventVisible: { value: function() {
        this.firstBoxEvent.waitForVisible(msTimeout);
        return true;
   
    } },

    listUpcomingEvents: { value: function() {
        
        this.upcomingLink.waitForEnabled(msTimeout);
        this.upcomingLink.click();
               
    } },

    listPastEvents: { value: function() {
        
        this.pastLink.waitForEnabled(msTimeout);
        this.pastLink.click();
               
    } }
   

});
module.exports = DiscoverEventPage