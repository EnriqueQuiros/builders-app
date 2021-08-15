/* eslint-disable */

describe("Cypress", () => {
  it("visits the app", () => {
    cy.visit("/");
  });

  it("displays the list of companies", () => {
    cy.get("img").should("have.length", 8);
  });

  it("the input is focused by default", () => {
    cy.focused().should("have.class", "w-full");
  });

  it("it allows to type a filter", () => {
    const input = "Strong";
    cy.get(".w-full").type(input).should("have.value", input);
  });

  it("the filter affects the number of companies", () => {
    cy.get("img").should("have.length", 1);
  });

  it("it will notify if there are no results", () => {
    const input = "too much filter";
    cy.get(".w-full").type(input);
    cy.contains(".text-xl", "No companies fit with the filter criteria");
  });

  it("it filters by specialty", () => {
    cy.visit("/");
    cy.get("img").should("have.length", 8);
    cy.get("[id=excavation]").click({ force: true });
    cy.get("[id=plumbing]").click({ force: true });
    cy.get("img").should("have.length", 5);
  });
});
