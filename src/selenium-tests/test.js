import { Builder, By, until } from 'selenium-webdriver';
import assert from 'assert';

async function runTest() {
    let driver = await new Builder().forBrowser('MicrosoftEdge').build();

    try {
        await driver.get('http://localhost:5173');

        let counter = await driver.findElement(By.className('counter'));
       
        let clickCounter = 0;
        await counter.click();
        clickCounter++;

        let counterValue = await counter.getAttribute('textContent');
        console.log('Counter value:', counterValue);
        assert.strictEqual(counterValue, `Count is ${clickCounter}`, 'Counter should be incremented to ${clickCounter}');

        await counter.click();
        clickCounter++;
        
        counterValue = await counter.getAttribute('textContent');
        console.log('Counter value:', counterValue);
        assert.strictEqual(counterValue, `Count is ${clickCounter}`, 'Counter should be incremented to ${clickCounter}');

    } finally {
        await driver.wait(until.elementLocated(By.className('counter')), 20000);
        //await driver.quit();

    }
}

runTest();