/// <reference types="cypress">

import { castArray } from "cypress/types/lodash";

describe("Navigation bar", () => {
  it("Should detect navigation bar links in large screens", () => {
    cy.visit("/");
    cy.get('[data-cy="navigation-bar"]').should("exist").and("be.visible");
    cy.get('[data-cy="navigation-links-lg"]').should("exist").and("be.visible");
    cy.get('[data-cy="navigation-links-lg"] > li')
      .first()
      .should("contain.text", "Search a book");
    cy.get('[data-cy="navigation-links-lg"] > li')
      .last()
      .should("contain.text", "Find a bookstore");
  });
  it("Assess links work correctly", () => {
    // * When links are created we have to create the according tests
    // * where the links redirect to those pages.
  });
  it("Should not detect mobile navigation bar links", () => {
    cy.get("[data-cy=navigation-links-mobile-wrapper]")
      .should("exist")
      .and("not.be.visible");
  });
  it("Changes viewport and detect the mobile navigation bar links", () => {
    cy.viewport("iphone-6");
    cy.get('[data-cy="navigation-bar"]').should("exist").and("be.visible");
    cy.get("[data-cy=navigation-links-mobile-wrapper]")
      .should("exist")
      .and("be.visible");
  });
  it("Clicks button and shows the links modal, then closes it", () => {
    cy.viewport("iphone-6");
    cy.get("[data-cy=navigation-links-mobile]").should("not.exist");
    cy.get("[data-cy=navigation-links-button]").should("exist").click();
    cy.get("[data-cy=navigation-links-mobile]")
      .should("exist")
      .and("be.visible");
    cy.get("[data-cy=navigation-links-mobile] > li")
      .first()
      .should("contain", "Search a book");
    cy.get("[data-cy=navigation-links-mobile] > li")
      .last()
      .should("contain", "Find a bookstore");
    cy.get("[data-cy=navigation-links-button]").should("exist").click();
    cy.get("[data-cy=navigation-links-mobile]").should("not.exist");
  });
  it("Should not deteect large screen links on mobile", () => {
    cy.viewport("iphone-6");
    cy.get('[data-cy="navigation-links-lg"]')
      .should("exist")
      .and("not.be.visible");
    cy.get('[data-cy="navigation-links-lg"]')
      .should("exist")
      .and("not.be.visible");
  });
});
