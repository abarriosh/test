// register_community_step3.page.js
var Page = require('../page');
const msTimeout = 30000;

var RegisterCommunityStep3Page = Object.create(Page, {
    /**
     * define elements
     */

    settingUpButton: { get: function () { return browser.element('/html/body/div[1]/div/div/div/div/div/div/div/div[1]/div[2]/div[2]/form/div[6]/div/a[1]'); } },
    
    /**
     * define or overwrite page methods
     */
      
    open: { value: function() {
        
        
    } },

    
    isSettingUpButtonEnable: { value: function() {
        this.settingUpButton.waitForEnabled(msTimeout);
        return true;
   
    } },

    settingUp: { value: function() {
        this.settingUpButton.waitForEnabled(msTimeout);
        this.settingUpButton.click();
   
    } }

});
module.exports = RegisterCommunityStep3Page