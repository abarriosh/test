
/* PRECONDITIONS

1. The group must be created in the environment: TestGroup for Automated Tests
2. The user that create the group and the user that make a post must be created in the environment.
    This test uses : andres@connexa.io (as group admin creator) and abarriosh@gmail.com as post maker

   If any data is changed (group name or users) it should be change in the test variables. 

*/

var assert = require('assert');
var LandingPage = require('../pageobjects/landing/landing.page');
var GroupActivityPage = require('../pageobjects/groups/group_activity.page');
var MenuTopBarPage = require('../pageobjects/general/menu_topbar_component.page');
var NotificationsTopBarPage = require('../pageobjects/general/notifications_topbar_component.page');
var GlobalSearchPage = require('../pageobjects/general/globalsearch_topbar_component.page');
var utils = require('../assets/utils.js').Utils;

describe('connexa.io Check the Notification after an Group Post', function() {
    it('the notification creator should receive the notification', function () {
        
        const groupName = 'TestGroup for Automated Tests';
        const post = 'Group Post '+ utils.randomNumber().value;
        console.log(post);

        browser.setViewportSize({width: 1366,height: 657}); //Needed to Expand the viewport (For Headless Execution)

      	//User Sign In to make a post 
       	LandingPage.open();
        LandingPage.login('abarriosh@gmail.com','hp692cie');

        //Search the Event
        GlobalSearchPage.search(groupName,'public');
        
        //Make an Event Post
        GroupActivityPage.createPost(post);
        GroupActivityPage.waitForPost(post)
        
        //LogOut the User that makes the post
        MenuTopBarPage.clickSignOutOption();

        //Sign In the group's creator to see the notification
        LandingPage.open();
        LandingPage.login('andres@connexa.io','hp692cie');

        //Search the Notification to make the assert
        assert.equal(true, NotificationsTopBarPage.isPostNotificationFound(groupName));

    });
});