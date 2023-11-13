exports.CartPage = class CartPage{

    constructor(page){
        this.page = page
        this.checkout_button = page.locator("//button[@id='checkout']")
    }

    async checkout_from_cart(username, password){
        await this.checkout_button.click()
    }
}