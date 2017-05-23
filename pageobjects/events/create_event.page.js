// create_event.page.js
var path = require('path');
var Page = require('../page');
var GlobalSearchPage = require('../general/globalsearch_topbar_component.page');
const msTimeout = 30000;

var CreateEventPage = Object.create(Page, {
    
    /* * define elements*/
    eventName: { get: function () { return browser.element('[name="name"]'); } },
    shortDescription: { get: function () { return browser.element('[name="short_description"]'); } },
    startDate: { get: function () { return browser.element('[name="start_date"]'); } },
    startHour: { get: function () { return browser.element('[name="start_hour"]'); } },
    endDate: { get: function () { return browser.element('[name="end_date"]'); } },
    endHour: { get: function () { return browser.element('[name="end_hour"]'); } },
    uploadCoverButton: { get: function () { return browser.element('/html/body/div[1]/div/div/div/div[3]/div/div/div/div/div/div/div[3]/form/div[1]/div[2]/div/div[1]/a'); } },
    file: { get: function () { return browser.element('#fileuploader'); } },
    croppingImage: { get: function () { return browser.element('/html/body/div[1]/div/div/div/div[4]/div/div/div/div/div/div[2]/div[2]/div/img'); } },
    saveCoverButton: { get: function () { return browser.element('#submit'); } },
    saveButton: { get: function () { return browser.element('/html/body/div[1]/div/div/div/div[3]/div/div/div/div/div/div/div[3]/form/div[14]/button[2]'); } },

    
     /* define or overwrite page methods*/
    open: { value: function() {
        
        GlobalSearchPage.waitForGlobalSearch(); //Using Global Searh Component to indicate logged in ...
        Page.open.call(this, 'events/new');
        
    } },
    
    removeReadonly: { value: function() {              //PRIVATE METHOD
        
        this.startDate.waitForEnabled(msTimeout); 

        browser.execute(function(){
            document.getElementById('start_date').removeAttribute('readonly',0);
            document.getElementById('start_hour').removeAttribute('readonly',0);
            document.getElementById('end_date').removeAttribute('readonly',0);
            document.getElementById('end_hour').removeAttribute('readonly',0);

            })
        
    } },


    setRequiredFields: { value: function(randomName,shortDescription,startDate,endDate,startHour,endHour) {
        
        this.removeReadonly();
        this.eventName.waitForEnabled(msTimeout);
        
        this.eventName.setValue(randomName);       
        this.shortDescription.setValue(shortDescription);
        this.startDate.setValue(startDate);
        this.endDate.setValue(endDate);
        this.startHour.setValue(startHour);
        this.endHour.setValue(endHour);
        
     
    } },

    uploadCover: { value: function() {
        
        this.uploadCoverButton.click();

        var toUpload = path.join('C:','puente.jpg');
        this.file.chooseFile(toUpload);
        this.croppingImage.waitForVisible(msTimeout);
        this.saveCoverButton.click();
     
    } },

    waitCover: { value: function() {                    //PRIVATE METHOD
        
        browser.waitUntil(function() {
            var src = browser.getAttribute('#js-cover-url', 'src');
            //console.log(src);
            return src != '';
        },msTimeout,'expected src to be different after msTimeout');
             
    } },

    save: { value: function(hasCover) {
        
        if (hasCover)
            this.waitCover();
               
        this.saveButton.waitForEnabled(msTimeout);   
        this.saveButton.waitForVisible(msTimeout);    
        this.saveButton.click();
               
    } }
});
module.exports = CreateEventPage