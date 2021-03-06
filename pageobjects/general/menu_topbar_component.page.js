// menu_topbar_component.page.js
var Page = require('../page');
const msTimeout = 30000;

var MenuTopBarPage = Object.create(Page, {      
    /**
     * define elements
     */
     settingsButton: { get: function () { return browser.element('#top-bar-menu'); } },
     profileOption: { get: function () { return browser.element('#top-bar-profile'); } },
     adminOption: { get: function () { return browser.element('#top-bar-admin-section'); } },
     signOutOption: { get: function () { return browser.element('#js-signout'); } },
          
     
     /**
     * define or overwrite page methods
     */
       
    clickSettingsButton: { value: function() {    //PRIVATE METHOD
           
        var caps = browser.session();
        
        this.settingsButton.waitForVisible(msTimeout);
        
        if (caps.value.browserName === 'phantomjs')
            this.settingsButton.moveToObject();    // HEADLESS
        else
            this.settingsButton.click();           // REAL BROWSER AS FIREFOX 
        
           
    } },


    clickProfileOption: { value: function() {     //PUBLIC METHOD
        
        this.clickSettingsButton();
        
        //Click over Profile Option    
        this.profileOption.waitForVisible(msTimeout);
        this.profileOption.click();
        
    } },

    clickAdminOption: { value: function() {     //PUBLIC METHOD
        
        this.clickSettingsButton();
        
        //Click over Admin Option    
        this.adminOption.waitForVisible(msTimeout);
        this.adminOption.click();
        
    } },

    clickSignOutOption: { value: function() {     //PUBLIC METHOD
        
        this.clickSettingsButton();
        
        //Click over Sign Out Option    
        this.signOutOption.waitForVisible(msTimeout);
        this.signOutOption.click();
        
    } }

       

});
module.exports = MenuTopBarPage