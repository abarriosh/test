// onboarding_user.page.js
var Page = require('../page');
const msTimeout = 30000;

var OnboardingUserPage = Object.create(Page, {
    /**
     * define elements
     */

    firstName: { get: function () { return browser.element('[name="first_name"]'); } },
    lastName: { get: function () { return browser.element('[name="last_name"]'); } },
    //maleGender:     { get: function () { return browser.element('#optionsRadios1'); } },   //Optional Field 
    //birthDay:  { get: function () { return browser.element('[name="date_[day]"]'); } },    //Optional Field
    //birthMonth: { get: function () { return browser.element('[name="date_[month]"]'); } }, //Optional Field
    //birthYear: { get: function () { return browser.element('[name="date_[year]"]'); } },   //Optional Field
    country:   { get: function () { return browser.element('#country'); } }, 
    city:      { get: function () { return browser.element('[name="city"]'); } }, 
    continueButton:  { get: function () { return browser.element('/html/body/div[1]/div/div/div/div[3]/div/div/div/div[1]/div[2]/div/form/div[3]/button'); } }, 
    countryNameSpan: { get: function () { return browser.element('#select2-country-container'); } },
    cityNameSpan: { get: function () { return browser.element('#select2-city-container'); } },


    /**
     * define or overwrite page methods
     */
      
    enableCity: { value: function() {
        
        this.city.waitForExist(msTimeout); 
                
        browser.execute(function(){
            document.getElementById('city').disabled = '';
            
        })
        
    } },

    createCityOption: { value: function() {
        
        this.city.waitForExist(msTimeout); 
                
        browser.execute(function(){
            var x = document.getElementById('city');
            var option = document.createElement("option");
            option.text = "Caracas";
            option.value = 'Caracas';
            x.add(option, x[0]);
            
        })
        
    } },

    setRequiredFields: { value: function(randomName,lastName,country,city) {
        
        this.firstName.waitForEnabled(msTimeout);
        this.firstName.setValue(randomName);       
        this.lastName.setValue(lastName);
        this.countryNameSpan.waitForVisible(msTimeout); //Wait for span that contains the country 
        this.country.selectByValue(country);
        this.enableCity();
        this.createCityOption();
        this.city.selectByValue(city);                
     
    } },

    continue: { value: function() {
        this.continueButton.click();
   
    } }

});
module.exports = OnboardingUserPage