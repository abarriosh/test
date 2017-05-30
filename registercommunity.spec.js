/*
  TEST A COMMUNITY CREATION
*/

var assert = require('assert');
var LandingPage = require('../pageobjects/landing/landing.page');
var RegisterCommunityStep1Page = require('../pageobjects/community/register_community_step1.page');
var RegisterCommunityStep2Page = require('../pageobjects/community/register_community_step2.page');
var RegisterCommunityStep3Page = require('../pageobjects/community/register_community_step3.page');
var OnboardingPage = require('../pageobjects/landing/onboarding_user.page');
var CommunityDetailsPage = require('../pageobjects/admin/community/community_details.page');
var MenuTopBarPage = require('../pageobjects/general/menu_topbar_component.page');
var utils = require('../assets/utils.js').Utils;
const msTimeout = 30000;

describe('connexa.io Register Community', function() {
    it('should have the registered data - the fancy generator way', function () {
      
        var randomNumber = utils.randomNumber().value;
        console.log(randomNumber);
        const email = 'testing' + randomNumber +'@connexa.io';
        const password = 'testing123';
        const name = 'Jhon';
        const lastName = 'Doe'; //Onboarding User Data - No Assert
        const country = 'VE';
        const city = 'Caracas';  //Onboarding User Data - No Assert
        const about = 'casual';  //HubSpot Data  - No Assert
        const actualMembers = '10';  // HubSpot Data - No Assert
        const nextYearMembers = '1000';  //HubSpot Data - No Assert
        const communityName = 'Con_Test_'+ randomNumber;
        const domainName = 'contest'+ randomNumber;
        
        browser.setViewportSize({width: 1366,height: 657}); //Expand the complete viewport For Headless Execution
            
        //Step 1
	    RegisterCommunityStep1Page.open();
        RegisterCommunityStep1Page.setRequiredFields(email,password); 
        RegisterCommunityStep1Page.start();
       
        //Step 2
        RegisterCommunityStep2Page.setFields(name,country,about,actualMembers,nextYearMembers,communityName,domainName);
        RegisterCommunityStep2Page.continue();

        //Step 3
        if (RegisterCommunityStep3Page.isSettingUpButtonEnable())
        {        
            //Login Page - Implicit Test For Email, Password and Community Domain
            LandingPage.openNewCommunity(domainName,'');
            LandingPage.login(email,password);

            //Onboarding Page Asserts and Operations
            assert.equal(name, OnboardingPage.getFirstName());
            assert.equal(country, OnboardingPage.getCountry());    

            OnboardingPage.setCommunityAdminFields(lastName,city);
            OnboardingPage.continue();

            //Admin Community Details
            MenuTopBarPage.clickAdminOption();
            CommunityDetailsPage.openFromNewCommunity(domainName);
            assert.equal(communityName, CommunityDetailsPage.getCommunityName());
        }   
        
    });
});