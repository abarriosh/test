/*
  FIREFOX EXEC: 1.5 Mbps -> 40.1 seg
  HEADLESS: 1.5 Mbs   -> 33.7 seg
*/

var assert = require('assert');
var PrivateLandingPage = require('../pageobjects/landing/private_landing.page');
var OnboardingUserPage = require('../pageobjects/landing/onboarding_user.page');
var WaitingApprovalPage = require('../pageobjects/landing/waiting_approval.page');
var ProfileSettingsPage = require('../pageobjects/profile/profile_settings.page');
var GlobalSearchPage = require('../pageobjects/general/globalsearch_topbar_component.page');
var utils = require('../assets/utils.js').Utils;
const msTimeout = 30000;

describe('connexa.io Register User by Email in Private Community', function() {
    it('should have the registered data - the fancy generator way', function () {
      
        var userFirstName = 'TestUser' + utils.randomNumber().value;
        console.log(userFirstName);

        const userLastName = 'Test';
        const userCountry = 'VE'; 
        const userCity = 'Caracas';

        browser.setViewportSize({width: 1366,height: 657}); //Needed to Expand the viewport beyond the Global Search (For Headless Execution)
        
            
        //Register by Email
	    PrivateLandingPage.open();
        PrivateLadingPage.registerByEmail(userFirstName); 
       
    	//Onboarding User Process
    	OnboardingUserPage.setRequiredFields(userFirstName,userLastName,userCountry,userCity);
        OnboardingUserPage.continue();
           
        //Sign Out the User
        WaitingApprovalPage.signOut();

        //Login as Admin
        LandingPage.loginAdmin();
       
        //Search the User Created 
        GlobalSearchPage.search(userFirstName+' '+userLastName);        
         
        //Comparing the Input User Data with the Profile Data Saved 
        ProfileSettingsPage.open();

        assert.equal(userFirstName, ProfileSettingsPage.getFirstName());
        assert.equal(userLastName, ProfileSettingsPage.getLastName());
        assert.equal(userCountry, ProfileSettingsPage.getCountry());
        assert.equal(userCity, ProfileSettingsPage.getCity());
        
    });
});