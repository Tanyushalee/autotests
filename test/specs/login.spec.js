const LoginPage = require('../pageobjects/LoginPage');

describe('Login page on Navigator CRM', () => {
    beforeEach('Setup browser', async() =>{
        await browser.url('http://167.114.201.175:5000/login');
    })
    afterEach('Clear browser', async()=>{
        await browser.reloadSession();
    })

    it('should login', async () => {
        await LoginPage.doLogin();
        await expect(browser).toHaveUrlContaining('clients');
        })
    it ('should fail login', async () => {
        await LoginPage.doLogin("Admin", "InvalidPassword");
        await expect(browser).toHaveUrlContaining('login');
    })
})

// password Navigator Admin@Navi