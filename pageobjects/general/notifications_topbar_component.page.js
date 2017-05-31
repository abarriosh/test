// notifications_topbar_component.page.js
var Page = require('../page');
const msTimeout = 30000;

var NotificationsTopBarPage = Object.create(Page, {      
    /**
     * define elements
     */
     
     notificationsButton: { get: function () { return browser.element('#notifications-link'); } },
     

     /**
     * define or overwrite page methods
     */
       
    clickNotificationsButton: { value: function() {    //PRIVATE METHOD
           
        var caps = browser.session();
        
        this.notificationsButton.waitForVisible(msTimeout);
        
        if (caps.value.browserName === 'phantomjs')
            this.notificationsButton.moveToObject();    // HEADLESS
        else
            this.notificationsButton.click();           // REAL BROWSER AS FIREFOX 
        
           
    } },


    isPostNotificationFound: { value: function(entity) {     //PUBLIC METHOD
        
        this.clickNotificationsButton();
        
        //Search Notification    
        browser.waitForText('='+entity,msTimeout);
        return true;

    } }
       

});
module.exports = NotificationsTopBarPage