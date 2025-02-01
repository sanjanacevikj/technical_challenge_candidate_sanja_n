import {clickAddToCartOnProduct, clickButton} from "../elements/button.js";
import { waitForAllXhrRequests } from "../helpers/wait.js";
import {getCurrentPage} from "../pages/page";

export const addToCart = () => {
    cy.log("Step--------------I add a product to cart");
    clickAddToCartOnProduct("Product - Sauca Labs Bike Light");
    waitForAllXhrRequests();
};

export const openCart = () => {
    cy.log("Step--------------click to open my cart");
    clickButton("Cart");
    waitForAllXhrRequests();
};

export const checkProductTitleOnCart = (elementLocator,productTitle) => {
    const page = getCurrentPage();
    const locator = page.cartElements[elementLocator];
    cy.get(locator.CSS).contains(productTitle);
};