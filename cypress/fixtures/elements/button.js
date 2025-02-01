import { getCurrentPage } from "../pages/page";

export const clickButton = (buttonName) => {
  cy.log("Step--------------clicking button " + buttonName);
  const page = getCurrentPage();
  const locator = page.buttons[buttonName];
  cy.wait(500);
  cy.get(locator.CSS).should("not.be.disabled");
  cy.get(locator.CSS).scrollIntoView().click();
};

export const clickAddToCartOnProduct = (productName) => {
  const page = getCurrentPage();
  const locator = page.products[productName];
  cy.wait(500);
  cy.get(locator.CSS).should("not.be.disabled");
  cy.get(locator.CSS).scrollIntoView().click();
};
