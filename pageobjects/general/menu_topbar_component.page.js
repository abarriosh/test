// menu_topbar_component.page.js
var Page = require('../page');
const msTimeout = 30000;

var MenuTopBarPage = Object.create(Page, {      
    /**
     * define elements
     */
     
     settingsButton: { get: function () { return browser.element('/html/body/div[1]/div/div/div/div[2]/div/div/div/nav/ul/li[3]/a'); } },
     profileOption: { get: function () { return browser.element('/html/body/div[1]/div/div/div/div[2]/div/div/div/nav/ul/li[3]/ul/li[1]/a'); } },
     
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
        
    } }

        

});
module.exports = MenuTopBarPage