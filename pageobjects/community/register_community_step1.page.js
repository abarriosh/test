// register_community_step1.page.js
var Page = require('../page');
const msTimeout = 30000;

var RegisterCommunityStep1Page = Object.create(Page, {
    /**
     * define elements
     */

    email: { get: function () { return browser.element('[name="user_email"]'); } },
    password: { get: function () { return browser.element('[name="user_password"]'); } },
    startButton: { get: function () { return browser.element('/html/body/div/div/div/div/div/div/div/div/div[1]/div[2]/div/form/div[2]/button'); } },
    sideImage: { get: function () { return browser.element('/html/body/div/div/div/div/div/div/div/div/div[2]/div'); } },

    /**
     * define or overwrite page methods
     */
      
    open: { value: function() {
        Page.openCreateCommunity.call(this, '');
        
    } },

    
    setRequiredFields: { value: function(email,password) {
        
        this.email.waitForEnabled(msTimeout);
        this.email.setValue(email);       
        this.password.setValue(password);
    } },

    start: { value: function() {
        this.startButton.waitForEnabled();
        this.startButton.click();
   
    } }

});
module.exports = RegisterCommunityStep1Page