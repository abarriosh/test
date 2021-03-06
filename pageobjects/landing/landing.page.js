// landing.page.js
var Page = require('../page');
const msTimeout = 30000;

var LandingPage = Object.create(Page, {
    /**
     * define elements
     */
   
    email: { get: function () { return browser.element('[name="email"]'); } },
    password: { get: function () { return browser.element('[name="password"]'); } },
    signInButton:     { get: function () { return browser.element('#btn-login'); } },
    registerEmail:  { get: function () { return browser.element('#email-register'); } },
    registerPassword: { get: function () { return browser.element('#password-register'); } },
    registerButton: { get: function () { return browser.element('#register-user-btn'); } },
  
   
    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        Page.open.call(this, '');
        
    } },

    openPrivate: { value: function() {
        Page.openPrivate.call(this, '');
        
    } },

    openNewCommunity: { value: function(domain,path) {
        Page.openNewCommunity.call(this,domain,path);
        
    } },

    loginAdmin: { value: function() {
        this.email.waitForEnabled();
        this.password.waitForEnabled();
        this.signInButton.waitForEnabled();
        this.registerEmail.waitForEnabled();//Guarantee that the fields and button are loaded

        this.email.setValue('andres@connexa.io');
        this.password.setValue('hp692cie');
        this.signInButton.click();
                        
    } },
    
    login: { value: function(email,password) {
        this.email.waitForEnabled();
        this.password.waitForEnabled();
        this.signInButton.waitForEnabled();
        this.registerEmail.waitForEnabled();//Guarantee that the fields and button are loaded

        this.email.setValue(email);
        this.password.setValue(password);
        this.signInButton.click();
                        
    } },


    registerByEmail: { value: function(name) {
      
        this.registerEmail.waitForEnabled();
        this.registerEmail.setValue(name + '@connexa.io');
        this.registerPassword.setValue('12345678');
        this.registerButton.click();
                
    } }



});
module.exports = LandingPage