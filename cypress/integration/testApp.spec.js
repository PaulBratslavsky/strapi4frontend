/// <reference types="cypress" />


describe("Test Loggin", () => {
  before(() => {
    cy.visit("/");
  })

  beforeEach(() => {
    cy.viewport("macbook-13");
  })

  it("should display the login page", () => {
    cy.url().should("include", "https://romantic-wing-9cde25.netlify.app")
    cy.log("should display the login page")

  })

  it("has user name input", () => {
    cy.get("input[name=identifier]").type("testuser@email.com")
    cy.log("Enter user name")
  })

  it("has password input", () => {
    cy.get("input[name=password]").type("testuser")
    cy.log("Enter password")
  })

  it("has submit button", () => {
    cy.get("button[type=submit]").click()
    cy.log("Click submit button")
  })

  it("redirect to dashboard", () => {
    cy.url().should("include", "/dashboard/teams")
    cy.log("Redirect to dashboard")
  })

});

describe("Test Add Team", () => {
 

  beforeEach(() => {
    cy.viewport("macbook-13");
  })

  it("Show teams page", () => {
    cy.url().should("include", "/dashboard/teams")
    cy.log("Proper view in teams")
  })

  it("has add team button", () => {
    cy.get("button[type=button]")
    cy.log("Click create team button")
  })
  
  // it("has user name input", () => {
  //   cy.get("input[name=identifier]").type("testuser@email.com")
  //   cy.log("Enter user name")
  // })

  // it("has password input", () => {
  //   cy.get("input[name=password]").type("testuser")
  //   cy.log("Enter password")
  // })

  // it("has submit button", () => {
  //   cy.get("button[type=submit]").click()
  //   cy.log("Click submit button")
  // })

});