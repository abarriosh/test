// project_list.page.js
var Page = require('../../page');
const msTimeout = 30000;

var ProjectsList = Object.create(Page, {
    
    /* * define elements*/
    optionMenu: { get: function () { return browser.element('#menu-projects'); } }, 
    //selectOwnerSpan: { get: function () { return browser.element('#"select2-owner_id-container'); } },
    selectOwner: { get: function () { return browser.element('#owner_id'); } },    
    saveButton: { get: function () { return browser.element('#save-owner'); } },
    changeOwnerLink: { get: function () { return browser.element('#owner-link'); } },
    ownerName: { get: function () { return browser.element('#owner-name'); } },

    optionsButton: { get: function () { return browser.element('#btn-options'); } },
    advanceSearch: { get: function () { return browser.element('#avanced-search'); } },
    filterAttribute: { get: function () { return browser.element('.filter-attribute'); } },
    filterValue: { get: function () { return browser.element('.filter-value'); } },
    btnSearch: { get: function () { return browser.element('#search'); } },
    nameResult: { get: function () { return browser.element('.name_object'); } },


    open: { value: function(domain) {
       this.optionMenu.click();
    } },


    findProject: { value: function(projectName) {
        //this.advanceSearch.waitForEnabled(msTimeout)
        this.advanceSearch.waitForVisible(msTimeout)
        this.advanceSearch.click()
        this.filterAttribute.waitForVisible(msTimeout)
        this.filterAttribute.selectByValue('title');
        this.filterValue.setValue(projectName)  
        this.btnSearch.waitForVisible()
        //this.btnSearch.waitForEnabled()
        this.btnSearch.click()
    } },


    clickOptionsButton: { value: function() {    //PRIVATE METHOD
        this.nameResult.waitForVisible(msTimeout);
        this.optionsButton.waitForVisible(msTimeout);
        browser.screenshot();
        this.optionsButton.click(); 
    } },


    openModalChangeOwner: { value: function() {
        this.clickOptionsButton();
        //this.changeOwnerLink.waitForEnabled(msTimeout);
        this.changeOwnerLink.waitForVisible(msTimeout);
        this.changeOwnerLink.click();
    } },

    createUserOption: { value: function(id, name) {
        this.selectOwner.waitForExist(msTimeout); 

        browser.execute(function(id, name){           
            var x = document.getElementById('owner_id');
            var option = document.createElement("option");
            option.text = name;
            option.value = id;
            x.add(option, x[0]);            
        },id,name)
        
    } },

    enableSelectOwner: { value: function() {
        this.selectOwner.waitForExist(msTimeout);
        browser.execute(function(){
            document.getElementById('owner_id').disabled = '';
        })
    } },


    setOwner: { value: function(id, name) {
        this.enableSelectOwner();        
        this.createUserOption(id, name);        
        this.selectOwner.selectByValue(id);        
    } },

    save: { value: function(hasCover) {
        this.saveButton.waitForEnabled(msTimeout);
        this.saveButton.waitForVisible(msTimeout);
        this.saveButton.click();
        browser.screenshot();
    } },

    getOwner: { value: function(projectName) {        
        this.ownerName.waitForVisible(msTimeout);
        return this.ownerName.getText()
    } }
});
module.exports = ProjectsList