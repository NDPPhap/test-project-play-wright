exports.CheckoutPage = class CheckoutPage{

    constructor(page){
        this.page = page
        this.firstname = page.locator('[data-test="firstName"]')
        this.lastName = page.locator('[data-test="lastName"]')
        this.postalCode = page.locator('[data-test="postalCode"]')
        this.continue_button = page.locator('[data-test="continue"]')
    }

    async fill_in_details(firstname, lastName, postalCode){
        await this.firstname.fill(firstname)
        await this.lastName.fill(lastName)
        await this.postalCode.fill(postalCode)
        await this.continue_button.click()
    }
}