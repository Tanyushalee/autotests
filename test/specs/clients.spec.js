const LoginPage = require('../pageobjects/LoginPage')
const ClientPage = require('../pageobjects/examples/ClientPage')

describe('Clients test', () => {
    beforeEach( async() => {
        await browser.url(browser.options.baseUrl + 'login');
        await LoginPage.doLogin()
    })
    it('should create new client', async ()=> {
        //первый способ
        await ClientPage.createClientButton.click();
        await ClientPage.surnameField.setValue("Тестовая фамилия")
        await ClientPage.firstnameField.setValue("Тестовое имя")

        //второй способ
        let testingUser = {
            surname: "Тестовая фамилия"
        }
        await ClientPage.fillForm(testingUser)


        await browser.pause(5000);
    })
})