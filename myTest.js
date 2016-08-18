var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('internet explorer')
    .build();

driver.get('http://www.google.com/ncr');
driver.findElement(By.name('q')).sendKeys('webdriver');
driver.findElement(By.name('btnG')).click();
console.log('Waiting for test...');
driver.wait(until.titleIs('webdriver - Google Search'), 10000);
console.log('Test is done');
driver.quit();