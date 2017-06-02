/* Preconditions:

    Must be execute in real browser

*/

var assert = require('assert');
var LandingPage = require('../pageobjects/landing/landing.page');
var CreateEventPage = require('../pageobjects/events/create_event.page');
var EventSettingsPage = require('../pageobjects/events/event_settings.page');
var utils = require('../assets/utils.js').Utils;
const msTimeout = 30000;

describe('connexa.io Create Event page', function() {
    it('should save and verify the event require fields with a cover', function () {
        
        var eventName = 'TestEvent' + utils.randomNumber().value;
        console.log(eventName);

        const shortDescription = 'Short Description';
        var date = utils.generateDate().value;
        var startHour = utils.generateHour(0).value;
        var endHour = utils.generateHour(5).value;

        //browser.setViewportSize({width: 1366,height: 657}); //Needed to Expand the viewport beyond the Global Search (For Headless Execution)

      	//Sign In
      	LandingPage.open();
        LandingPage.loginAdmin();

        //Create Event
        CreateEventPage.open();
        CreateEventPage.setRequiredFields(eventName,shortDescription,date,date,startHour,endHour);
  
        //Upload Cover
        CreateEventPage.uploadCover();                 

		//Save Event
		CreateEventPage.save(true);
        
        //Comparing the Input User Data with the Event Data Saved 
        
        EventSettingsPage.open();

        assert.equal(eventName, EventSettingsPage.getEventName());
        assert.equal(shortDescription, EventSettingsPage.getShortDescription());
        assert.equal(date, EventSettingsPage.getStartDate());
        assert.equal(date, EventSettingsPage.getEndDate());
        assert.equal(startHour, EventSettingsPage.getStartHour());
        assert.equal(endHour, EventSettingsPage.getEndHour());
        
    });
});