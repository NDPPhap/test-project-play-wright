exports.ProductPage = class ProductPage{

    constructor(page){
        this.page = page
        this.addtocart_button = page.locator("//button[@id='add-to-cart-sauce-labs-backpack']")
        this.cart_button = page.locator('a').filter({ hasText: '1' })
    }

    async add_to_cart_and_checkout(username, password){
        await this.addtocart_button.click()
        await this.cart_button.click()
    }
}