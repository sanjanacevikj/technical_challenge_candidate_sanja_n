import pages from "./pages.json";
import { useState } from "../helpers/stateManager.js";

export const goToPage = (pageName) => {
  const page = getPage(pageName);
  cy.visit(page.path);
  setNewPage(pageName);
};

export const getPage = (pageName) => {
  const page = pages[pageName];
  return {
    path: page.Path,
    buttons: {
      ...page.Buttons,
      ...pages.Common.Buttons,
    },
    fields: {
      ...page.Fields,
      ...pages.Common.Fields,
    },
    selects: {
      ...page.Selects,
      ...pages.Common.Selects,
    },
    products: {
      ...page.Products,
      ...pages.Common.Products,
    },
    cartElements: {
      ...page.CartElements,
      ...pages.Common.CartElements,
    }
  };
};

const [getPageName, setPageName] = useState("Home");

export const getCurrentPage = () => {
  return getPage(getPageName());
};

export const setNewPage = (newPageName) => {
  setPageName(newPageName);
};

export const checkTextOnThePage = (text) => {
  cy.contains(text);
};
