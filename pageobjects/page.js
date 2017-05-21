function Page () {
    this.title = 'My Page';
}
Page.prototype.open = function (path) {
    browser.url('http://test.qa.connexa.io/'+ path);
}
module.exports = new Page()