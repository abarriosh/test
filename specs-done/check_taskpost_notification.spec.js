
/* PRECONDITIONS

1. The task must be created in the environment: TestTask for Automated Tests
2. The user that creates the task and the user that makes a post must be created in the environment.
    This test uses : andres@connexa.io (as task admin creator) and abarriosh@gmail.com as post maker

   If any data is changed (task name or users) it should be change in the test variables. 

*/

var assert = require('assert');
var LandingPage = require('../pageobjects/landing/landing.page');
var TaskDetailPage = require('../pageobjects/tasks/task_detail.page');
var MenuTopBarPage = require('../pageobjects/general/menu_topbar_component.page');
var NotificationsTopBarPage = require('../pageobjects/general/notifications_topbar_component.page');
var SearchPage = require('../pageobjects/general/search_component.page');
var DiscoverTaskPage = require('../pageobjects/tasks/discover_task.page');
var utils = require('../assets/utils.js').Utils;

describe('connexa.io Check the Notification after a Task Post', function() {
    it('the notification creator should receive the notification', function () {
        
        const taskName = 'TestTask for Automated Tests';
        const comment = 'Task Comment '+ utils.randomNumber().value;
        console.log(comment);

        browser.setViewportSize({width: 1366,height: 657}); //Needed to Expand the viewport (For Headless Execution)

      	//User Sign In to make a post 
       	LandingPage.open();
        LandingPage.login('abarriosh@gmail.com','hp692cie');

        //Search the Task in the Discover Filter
        DiscoverTaskPage.open();
        SearchPage.search(taskName);
               
        //Make a Task Post
        TaskDetailPage.createComment(comment);
        TaskDetailPage.waitForComment(comment)
        
        //LogOut the User that makes the post
        MenuTopBarPage.clickSignOutOption();

        //Sign In the task's creator to see the notification
        LandingPage.open();
        LandingPage.login('andres@connexa.io','hp692cie');

        //Search the Notification to make the assert
        assert.equal(true, NotificationsTopBarPage.isPostNotificationFound(taskName));

    });
});