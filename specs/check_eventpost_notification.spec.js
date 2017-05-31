
/* PRECONDITIONS

1. The event must be created in the environment: TestEvent for Automated Tests
2. The user that create the event and the user that make a post must be created in the environment.
    This test use : andres@connexa.io (as event admin creator) and abarriosh@gmail.com as post maker

   If any data is changed (event name or users) it should be change in the test variables. 

*/

var assert = require('assert');
var LandingPage = require('../pageobjects/landing/landing.page');
var EventActivityPage = require('../pageobjects/events/event_activity.page');
var MenuTopBarPage = require('../pageobjects/general/menu_topbar_component.page');
var NotificationsTopBarPage = require('../pageobjects/general/notifications_topbar_component.page');

describe('connexa.io Check the Notification after an Event Post', function() {
    it('should have the right title - the fancy generator way', function () {
        
        const eventName = 'TestEvent for Automated Tests';
        console.log(eventName);

        browser.setViewportSize({width: 1366,height: 657}); //Needed to Expand the viewport (For Headless Execution)

      	//User Sign In to make a post 
       	LandingPage.open();
        LandingPage.login('abarrioh@gmail.com','hp692cie');

        //Search the Event
        GlobalSearchPage.search(eventName,'public');
        
        //Make an Event Post
        EventActivityEvent.createPost('Automatic Testing Post...')
       
        //LogOut the User that makes the post
        MenuTopBarPage.clickSignOutOption();

        //Sign In the event's creator to see the notification
        LandingPage.open();
        LandingPage.login('andres@connexa.io','hp692cie');

        //Search the Notification to make the assert
        assert.equal(true, NotificationsTopBarPage.isPostNotificationFound(eventName);

    });
});