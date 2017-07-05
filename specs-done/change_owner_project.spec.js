
var assert = require('assert');
var LandingPage = require('../pageobjects/landing/landing.page');
var MenuTopBarPage = require('../pageobjects/general/menu_topbar_component.page');
var adminProject = require('../pageobjects/admin/projects/projects_list.page');

describe('connexa.io Projects Admin Section. ', function() {
    it('Change owner of a project and verify the owner before in project search', function () {
        
        var projectName  = 'TestIdea for Automated Tests';
        var ownerName = 'Ciria Rabago'
        var ownerId = 9
        
        browser.setViewportSize({width: 1366,height: 657}); //Needed to Expand the viewport (For Headless Execution)

        //User Admin Sign In
        LandingPage.open();        
        LandingPage.loginAdmin();        
        MenuTopBarPage.clickAdminOption();
        adminProject.open();        
        adminProject.findProject(projectName);        
        adminProject.openModalChangeOwner();        
        adminProject.setOwner(ownerId, ownerName);
        console.log('adminProject.setOwner OK')
        adminProject.save();

        //Make the assert
        assert.equal(ownerName, adminProject.getOwner(projectName));

    });
});