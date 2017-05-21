function PrivatePage () {
    this.title = 'My Page';
}
PrivatePage.prototype.open = function (path) {
    browser.url('http://privatetest.qa.connexa.io/'+ path);
}
module.exports = new PrivatePage()