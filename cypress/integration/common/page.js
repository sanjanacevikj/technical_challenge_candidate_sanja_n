import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import {
  goToPage,
  checkTextOnThePage,
} from "../../fixtures/pages/page";
import {loginWithUI} from "../../fixtures/authorization/login";
import {addToCart, checkElementTitle, checkProductTitleOnCart, openCart} from "../../fixtures/products/cart";
import {clickDescendingOption, clickOnDescendingOption, clickOnFilterButton} from "../../fixtures/products/filters";

Given(`I navigate to the page: {string}`, (pageName) => {
  goToPage(pageName);
  cy.viewport(1320, 2000);
});

Then(`I see text {string} on the page`, (text) => {
  checkTextOnThePage(text);
});

When(`I add a product to cart`, () => {
  addToCart();
});

And(`click to open my cart`, () => {
  openCart();
});

Then(`correct item is added to cart with matching {string}`, (productTitle) => {
checkProductTitleOnCart("Cart Product Name", productTitle);
});

When(`I click on descending option in filter`, () => {
clickOnDescendingOption();
});

Then(`items are displaying in descending order`, () => {
  cy.get(".inventory_item").last().should("contain.text", "Sauce Labs Backpack");
});