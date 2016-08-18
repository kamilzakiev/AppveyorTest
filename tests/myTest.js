function runTest(browsers) {
    var webdriver = require('selenium-webdriver'),
        By = webdriver.By,
        until = webdriver.until;
        
    browsers.forEach(function(browser) {      
        var driver = new webdriver.Builder()
            .forBrowser(browser) 
            .build();

        driver.get('http://www.google.com/ncr');
        driver.findElement(By.name('q')).sendKeys('webdriver');
        driver.findElement(By.name('btnG')).click();
        driver.wait(until.titleIs('webdriver - Google Search'), 200000);
        driver.quit();
    });
}

module.exports = runTest;