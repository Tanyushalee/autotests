const LoginPage = require('../pageobjects/LoginPage')
const LoyaltyPage = require('../pageobjects/LoyaltyPage')

describe('Loyalty test', () => {
    beforeEach( async() => {
        await browser.url(browser.options.baseUrl + 'login');
        await LoginPage.doLogin()
        await browser.pause(5000);

    })
    afterEach( async () => {
        await browser.reloadSession();
    })

    xit('should create new loyalty', async ()=> {
    
        await browser.url(browser.options.baseUrl + 'bonus-system/auto-levels');

        await LoyaltyPage.firstListElement.click()
        await LoyaltyPage.createLoyaltyButton.click()
        await LoyaltyPage.nameField.setValue('Gold')
        await browser.pause(5000);

        await LoyaltyPage.sumField.setValue('100')
        await LoyaltyPage.pointsField.setValue('10')
        await LoyaltyPage.fromField.setValue('0')
        await LoyaltyPage.toField.setValue('1000')
        await LoyaltyPage.saveButton.click()

        await browser.pause(5000);
    })

    xit('should edit bonus', async ()=> {
        
        await browser.url(browser.options.baseUrl + 'bonus-system/auto-levels');

        await LoyaltyPage.firstListElement.click()
        await LoyaltyPage.editButton.click()
        await LoyaltyPage.nameField.setValue('Silver')
        await LoyaltyPage.saveButton.click()

        await browser.pause(5000);
    })
    xit('should delete bonus', async ()=> {
        
        await browser.url(browser.options.baseUrl + 'bonus-system/auto-levels');
        await browser.pause(5000);

        await LoyaltyPage.firstListElement.click()
        await LoyaltyPage.deleteButton.click()
        await browser.pause(5000);

        await LoyaltyPage.confirmButton.click()

        await browser.pause(5000);
    })

    it('should create new loyalty manual', async ()=> {
    
        await browser.url(browser.options.baseUrl + 'bonus-system/manual-levels');
        await browser.pause(5000);

        await LoyaltyPage.manualElement.click()
        await LoyaltyPage.createLoyaltyButton.click()
        await LoyaltyPage.nameManualField.setValue('Gold')
        await LoyaltyPage.sumManualField.setValue('100')
        await LoyaltyPage.pointsManualField.setValue('10')
        await LoyaltyPage.saveManualButton.click()

        await browser.pause(5000);
    })
})