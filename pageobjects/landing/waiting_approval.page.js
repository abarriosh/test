// waiting_approval.page.js
var Page = require('../page');
const msTimeout = 30000;

var WaitingApprovalPage = Object.create(Page, {
    /**
     * define elements
     */
    signOutButton:   { get: function () { return browser.element('#js-signout'); } },

    /**
     * define or overwrite page methods
     */
      
      signOut: { value: function() {
        
        this.signOutButton.waitForEnabled(msTimeout);
        this.signOutButton.click();
        
    } }
    

});
module.exports = WaitingApprovalPage