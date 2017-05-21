// event_settings.page.js
var Page = require('../page');

const msTimeout = 30000;

var EventSettingsPage = Object.create(Page, {
    /**
     * define elements
     */

    eventName: { get: function () { return browser.element('[name="name"]'); } },
    shortDescription: { get: function () { return browser.element('[name="short_description"]'); } },
    startDate: { get: function () { return browser.element('[name="start_date"]'); } },
    startHour: { get: function () { return browser.element('[name="start_hour"]'); } },
    endDate: { get: function () { return browser.element('[name="end_date"]'); } },
    endHour: { get: function () { return browser.element('[name="end_hour"]'); } },
    settingsTab: { get: function () { return browser.element('/html/body/div[1]/div/div/div/div[3]/div/div/div[1]/div/ul/li[6]/a'); } },
    
    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        
        this.settingsTab.waitForVisible(msTimeout);
        this.settingsTab.click();
        this.eventName.waitForEnabled(msTimeout); //Event Name Field indicates that Settings Form is enabled
               
    } },
             

    getEventName: { value: function() {
       
       return this.eventName.getValue();
                
    } },

    getShortDescription: { value: function() {
       
       return this.shortDescription.getValue();
                
    } },

    getStartDate: { value: function() {
       
       return this.startDate.getValue();               

    } },

    getStartHour: { value: function() {
       
       return this.startHour.getValue();               

    } },
     
    getEndDate: { value: function() {
       
       return this.endDate.getValue();               

    } },


    getEndHour: { value: function() {
       
       return this.endHour.getValue();               

    } }

});
module.exports = EventSettingsPage