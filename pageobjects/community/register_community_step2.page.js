// register_community_step2.page.js
var Page = require('../page');
const msTimeout = 30000;

var RegisterCommunityStep2Page = Object.create(Page, {
    /**
     * define elements
     */

    name: { get: function () { return browser.element('[name="user_first_name"]'); } },
    country: { get: function () { return browser.element('[name="account_country_code"]'); } },
    about: { get: function () { return browser.element('[name="account_about"]'); } },
    actualMembers: { get: function () { return browser.element('[name="account_current_size"]'); } },
    nextYearMembers: { get: function () { return browser.element('[name="account_potential_size"]'); } },
    communityName: { get: function () { return browser.element('[name="account_name"]'); } },
    communitySubdomain: { get: function () { return browser.element('[name="account_subdomain"]'); } },
    //continueButton: { get: function () { return browser.element('/html/body/div/div/div/div/div/div/div/div/div[1]/div[2]/div/form/div[2]/button'); } },
    continueButton: { get: function () { return browser.element('#continue-register'); } },
    countryNameSpan: { get: function () { return browser.element('/html/body/div/div/div/div/div/div/div/div/div[1]/div[2]/div/form/div[1]/div/div[2]/div[2]/span[1]/span[1]/span/span[1]/span'); } },
    aboutNameSpan: { get: function () { return browser.element('#select2-account_about-container'); } },

    /**
     * define or overwrite page methods
     */
      
    open: { value: function() {
        //Page.openCreateCommunity.call(this, '');
        
    } },

    
    setFields: { value: function(name,country,about,actualMembers,nextYearMembers,communityName,communitySubdomain) {
        
        this.name.waitForEnabled(msTimeout);
        this.name.setValue(name);       
        this.countryNameSpan.waitForVisible(msTimeout); //Wait for span that contains the country 
        this.country.selectByValue(country);
        this.aboutNameSpan.waitForVisible(msTimeout); //Wait for span that contains the about Community Info 
        this.about.selectByValue(about);
        this.actualMembers.setValue(actualMembers);
        this.nextYearMembers.setValue(nextYearMembers);
        this.communityName.setValue(communityName);
        this.communitySubdomain.setValue(communitySubdomain);  
         
    } },

    continue: { value: function() {
        this.continueButton.click();
   
    } }

});
module.exports = RegisterCommunityStep2Page