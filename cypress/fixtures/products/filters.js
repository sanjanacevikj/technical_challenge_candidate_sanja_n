import {clickAddToCartOnProduct, clickButton} from "../elements/button.js";
import { waitForAllXhrRequests } from "../helpers/wait.js";
import {getCurrentPage} from "../pages/page";

export const clickOnDescendingOption = () => {
    cy.log("Step--------------click on descending option");
    cy.get(".inventory_item").first().should("contain.text", "Sauce Labs Backpack");
    cy.get('select').select('Name (Z to A)');
};
