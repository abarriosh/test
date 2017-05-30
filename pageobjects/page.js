function Page () {
    this.title = 'My Page';
}
Page.prototype.open = function (path) {
    browser.url('http://test.qa.connexa.io/'+ path);
}

Page.prototype.openPrivate = function (path) {
    browser.url('http://privatetest.qa.connexa.io/'+ path);
}

Page.prototype.openCreateCommunity = function (path) {
    browser.url('http://register.qa.connexa.io/'+ path);
}

Page.prototype.openNewCommunity = function (domain,path) {
    browser.url('http://'+domain+'.qa.connexa.io/'+path);
}

module.exports = new Page()

