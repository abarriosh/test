
var assert = require('assert');
var LandingPage = require('../pageobjects/landing/landing.page');
var GlobalSearchPage = require('../pageobjects/general/globalsearch_topbar_component.page');

describe('connexa.io Check the Option Show All Results from Global Search ', function() {
    it('should verify the option Show All Results is displaying', function () {
        
        browser.setViewportSize({width: 1366,height: 657}); //Needed to Expand the viewport (For Headless Execution)

      	//User Admin Sign In
       	LandingPage.open();
       	LandingPage.loginAdmin();
        
        //Make the assert with a simple String 'con'
        assert.equal(true,GlobalSearchPage.isShowAllResultsDisplayed('con'));

    });
});