var webdriver = require('selenium-webdriver'),
    Capabilities = require('selenium-webdriver/lib/capabilities').Capabilities,
    until = webdriver.until;

var capabilities = Capabilities.firefox();

function runTest(browsers) {
    capabilities.set('marionette', true);
        
    browsers.forEach(function(browser) {      
        var driver = new webdriver.Builder()
            //.forBrowser(browser)
            .withCapabilities(capabilities)
            .build();

        driver.get('http://www.google.com/ncr');
        driver.wait(until.titleContains('Google'), 1000);
        driver.quit();
    });
}

module.exports = runTest;