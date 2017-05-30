// private_landing.page.js
var PrivatePage = require('../private_page');

const msTimeout = 30000;

var PrivateLandingPage = Object.create(PrivatePage, {
    /**
     * define elements
     */

    email: { get: function () { return browser.element('[name="email"]'); } },
    password: { get: function () { return browser.element('[name="password"]'); } },
    signInButton:     { get: function () { return browser.element('/html/body/div[1]/div/div/div/div[3]/div/div/div/div/div/div/div[3]/div/div/form/button'); } },
    registerEmail:  { get: function () { return browser.element('/html/body/div[1]/div/div/div/div[3]/div/div/section[2]/div/div/div/div/div[2]/div/div/form/div[1]/input'); } },
    registerPassword: { get: function () { return browser.element('/html/body/div[1]/div/div/div/div[3]/div/div/section[2]/div/div/div/div/div[2]/div/div/form/div[2]/input'); } },
    registerButton: { get: function () { return browser.element('/html/body/div[1]/div/div/div/div[3]/div/div/section[2]/div/div/div/div/div[2]/div/div/form/button'); } },

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        PrivatePage.open.call(this, '');
        
    } },
    
    loginAdmin: { value: function() {
        this.email.waitForEnabled();
        this.email.setValue('andres@connexa.io');
        this.password.setValue('hp692cie');
        this.signInButton.click();
                        
    } },
    
    registerByEmail: { value: function(name) {
      
        this.registerEmail.waitForEnabled();
        this.registerEmail.setValue(name + '@connexa.io');
        this.registerPassword.setValue('12345678');
        this.registerButton.click();
                
    } }



});
module.exports = PrivateLandingPage