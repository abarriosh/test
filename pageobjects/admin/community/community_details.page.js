// community_details.page.js
var Page = require('../../page');
const msTimeout = 30000;

var CommunityDetails = Object.create(Page, {
    /**
     * define elements
     */

    communityName: { get: function () { return browser.element('#name'); } },
    
    /**
     * define or overwrite page methods
     */
      
    openFromNewCommunity: { value: function(domain) {
        
       Page.openNewCommunity.call(this,domain,'admin/community/account_settings');

    } },

    
    getCommunityName: { value: function() {
        this.communityName.waitForVisible(msTimeout);
        return this.communityName.getValue();
    } }

});
module.exports = CommunityDetails