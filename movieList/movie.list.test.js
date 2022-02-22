const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

describe(`A series of test for movieList website`, () => {
    test ('add a movie', async () => {
        const inputField = await driver.findElement(By.xpath('//input'))
        await inputField.sendKeys('Tenet')
        await driver.sleep(2000)
        const movieButton = await driver.findElement(By.css('button'))
        await movieButton.click()
        await driver.sleep(2000)
    })
    
    test ('remove movie', async () => {
        const inputField = await driver.findElement(By.xpath('//input'))
        await inputField.sendKeys('Superman')
        await driver.sleep(2000)
        const movieButton = await driver.findElement(By.css('button'))
        await movieButton.click()
        await driver.sleep(2000)
        const deleteButton = await driver.findElement(By.xpath("//*[text()='x']"))
        await deleteButton.click()
        await driver.sleep(2000)
    })

    test ('cross movie off', async () => {
        const inputField = await driver.findElement(By.xpath('//input'))
        await inputField.sendKeys('Finding Nemo')
        await driver.sleep(2000)
        const movieButton = await driver.findElement(By.css('button'))
        await movieButton.click()
        await driver.sleep(2000)
        const crossOff = await driver.findElement(By.xpath("//li/span"))
        await crossOff.click()
        await driver.sleep(2000)
    })

    test ('Re-add movie', async () => {
        const crossOff = await driver.findElement(By.xpath("//ul/li[2]/span"))
        await crossOff.click()
        await driver.sleep(2000)
        await crossOff.click()
        await driver.sleep(2000)
    })
})
