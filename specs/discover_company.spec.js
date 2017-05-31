
var assert = require('assert');
var LandingPage = require('../pageobjects/landing/landing.page');
var DiscoverCompanyPage = require('../pageobjects/companies/discover_company.page');

describe('connexa.io Check the Discover Companies', function() {
    it('should have the right title - the fancy generator way', function () {
        
        browser.setViewportSize({width: 1366,height: 657}); //Needed to Expand the viewport (For Headless Execution)

      	//User Admin Sign In
       	LandingPage.openAdmin();
        
        //Open Discover Companies Page
        DiscoverCompanyPage.open();
        
        //Make the assert
        assert.equal(true,DiscoverCompanyPage.isPageDisplayed());

    });
});