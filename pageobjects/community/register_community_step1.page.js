// register_community_step1.page.js
var Page = require('../page');
const msTimeout = 30000;

var RegisterCommunityStep1Page = Object.create(Page, {
    /**
     * define elements
     */

    email: { get: function () { return browser.element('[name="user_email"]'); } },
    password: { get: function () { return browser.element('[name="user_password"]'); } },
    startButton: { get: function () { return browser.element('#start-register'); } },

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