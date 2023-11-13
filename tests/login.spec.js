import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login'
import { CartPage } from '../pages/cart'
import { CheckoutPage } from '../pages/checkout'
import { ProductPage } from '../pages/product'

test('login standard_user', async ({ page }) => {
    const Login = new LoginPage(page)
    await Login.gotoLoginPage();
    await Login.login('standard_user','secret_sauce');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('text=Products')).toHaveCount(1);
});

test('login locked_out_user', async ({ page }) => {
    const Login = new LoginPage(page)
    await Login.gotoLoginPage();
    await Login.login('locked_out_user','secret_sauce');
    await expect(page.locator('text=Epic sadface: Sorry, this user has been locked out.')).toHaveCount(1);
});

test('login problem_user', async ({ page }) => {
    const Login = new LoginPage(page)
    const Product = new ProductPage(page)
    const Cart = new CartPage(page)
    const Checkout = new CheckoutPage(page)

    await Login.gotoLoginPage();
    await Login.login('problem_user','secret_sauce');
    await Product.add_to_cart_and_checkout();
    await Cart.checkout_from_cart();
    await Checkout.fill_in_details('test','test','8888');
    await expect(page.locator('text=Error: Last Name is required')).toHaveCount(1);
});

test('login performance_glitch_user', async ({ page }) => {
    const Login = new LoginPage(page)
    await Login.gotoLoginPage();
    await Login.login('performance_glitch_user','secret_sauce');
    await expect(page.locator('text=Products')).toHaveCount(1);
});