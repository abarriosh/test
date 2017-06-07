// profile_settings.page.js
var Page = require('../page');

const msTimeout = 30000;

var ProfileSettingsPage = Object.create(Page, {
    /**
     * define elements
     */

    firstName: { get: function () { return browser.element('[name="first_name"]'); } },
    lastName: { get: function () { return browser.element('[name="last_name"]'); } },
    country: { get: function () { return browser.element('[name="country_code"]'); } },
    city: { get: function () { return browser.element('[name="city"]'); } },
    settingsTab: { get: function () { return browser.element('#profile-tab-setting'); } },
    //settingsTab: { get: function () { return browser.element('/html/body/div[1]/div/div/div/div[4]/div/div/div[1]/div/ul/li[4]/a'); } },
    countryNameSpan: { get: function () { return browser.element('#select2-country_code-container'); } },
    cityNameSpan: { get: function () { return browser.element('#select2-city-container'); } },

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        
        this.settingsTab.waitForVisible(msTimeout);
        this.settingsTab.click();
        this.firstName.waitForEnabled(msTimeout); //First Name Field indicates that Settings Form is enabled
               
    } },
             

    getFirstName: { value: function() {
       
       return this.firstName.getValue();
                
    } },

    getLastName: { value: function() {
       
       return this.lastName.getValue();
                
    } },

    getCountry: { value: function() {
       
       this.countryNameSpan.waitForVisible(msTimeout); //Wait span visibility containing the country name
       return this.country.getValue();
                       
    } },

     getCity: { value: function() {
       
       this.cityNameSpan.waitForVisible(msTimeout); //Wait span visibility containing the city name
       return this.city.getValue();
                       
    } },


});
module.exports = ProfileSettingsPage