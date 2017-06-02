
/* PRECONDITIONS

Must Exists al least one upcoming event

*/

var assert = require('assert');
var LandingPage = require('../pageobjects/landing/landing.page');
var DiscoverEventPage = require('../pageobjects/events/discover_event.page');

describe('connexa.io Check the Upcoming Event Function', function() {
    it('the first event must be visible', function () {
        
        browser.setViewportSize({width: 1366,height: 657}); //Needed to Expand the viewport (For Headless Execution)

      	//Sign In 
       	LandingPage.open();
        LandingPage.loginAdmin();

        //Open Discover Events
        DiscoverEventPage.open();
        DiscoverEventPage.listUpcomingEvents();

        //Verify the first event in the list
        assert.equal(true, DiscoverEventPage.isFirstBoxEventVisible());

    });
});