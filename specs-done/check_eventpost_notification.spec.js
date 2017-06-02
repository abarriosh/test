
/* PRECONDITIONS

1. The event must be created in the environment: TestEvent for Automated Tests
2. The user that create the event and the user that make a post must be created in the environment.
    This test use : andres@connexa.io (as event admin creator) and abarriosh@gmail.com as post maker

   If any data is changed (event name or users) it should be change in the test variables. 

   USE ONLY HEADLESS, BECAUSE THE ASSERT IS WITH THE SMALL NOTIFICATIONS WINDOW.
   CURRENTLY THERE ARE SOME PROBLEMS WIH REAL BROWSERS AND WEBDRIVER.IO MOVETO() METHOD.
   THE TEST DO A CLICK THAT SHOWS THE COMPLETE NOTIFICATIONS PAGE, IN THAT CASE A CORRECT ASSERT MUST LOOKUP EACH NOTIFICACION, CLICKS
   OVER THE EVENT AND COMPARE THE RANDOM POST. IN TERMS OF PERFORMANCE, IT IS BETTER FIND THE WAY THAT MOVETO() METHOD
   WORKS ON REAL BROWSERS.. 
*/
var assert = require('assert');
var LandingPage = require('../pageobjects/landing/landing.page');
var EventActivityPage = require('../pageobjects/events/event_activity.page');
var MenuTopBarPage = require('../pageobjects/general/menu_topbar_component.page');
var NotificationsTopBarPage = require('../pageobjects/general/notifications_topbar_component.page');
var GlobalSearchPage = require('../pageobjects/general/globalsearch_topbar_component.page');
var utils = require('../assets/utils.js').Utils;

describe('connexa.io Check the Notification after an Event Post', function() {
    it('the notification creator should receive the notification', function () {
        
        const eventName = 'TestEvent for Automated Tests';
        const post = 'Event Post '+ utils.randomNumber().value;
        console.log(post);

        browser.setViewportSize({width: 1366,height: 657}); //Needed to Expand the viewport (For Headless Execution)

      	//User Sign In to make a post 
       	LandingPage.open();
        LandingPage.login('abarriosh@gmail.com','hp692cie');

        //Search the Event
        GlobalSearchPage.search(eventName,'public');
        
        //Make an Event Post
        EventActivityPage.createPost(post);
        EventActivityPage.waitForPost(post)
        
        //LogOut the User that makes the post
        MenuTopBarPage.clickSignOutOption();

        //Sign In the event's creator to see the notification
        LandingPage.open();
        LandingPage.login('andres@connexa.io','hp692cie');

        //Search the Notification to make the assert
        assert.equal(true, NotificationsTopBarPage.isPostNotificationFound(eventName));

    });
});