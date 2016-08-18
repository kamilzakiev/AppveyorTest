function runTest(browsers) {
    var webdriver = require('selenium-webdriver'),
        until = webdriver.until;
        
    browsers.forEach(function(browser) {      
        var driver = new webdriver.Builder()
            .forBrowser(browser) 
            .build();

        driver.get('http://www.google.com/ncr');
        driver.wait(until.titleContains('Google'), 1000);
        driver.quit();
    });
}

module.exports = runTest;